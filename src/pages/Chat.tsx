import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowLeft, Send, Sparkles } from 'lucide-react';
import { SEO } from '@/components/seo/SEO';
import { toast } from 'sonner';

interface Message {
  id: string;
  sender_type: 'user' | 'ai';
  content: string;
  created_at: string;
}

interface Conversation {
  id: string;
  title: string;
  ai_girlfriend: {
    name: string;
    personality: string;
    avatar_url?: string;
    is_premium: boolean;
  };
}

export default function Chat() {
  const { conversationId } = useParams();
  const navigate = useNavigate();
  const { user, profile } = useAuth();
  const [conversation, setConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!user) {
      navigate('/');
      return;
    }

    if (!conversationId) {
      navigate('/dashboard');
      return;
    }

    fetchConversation();
    fetchMessages();
  }, [conversationId, user, navigate]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const fetchConversation = async () => {
    try {
      const { data, error } = await supabase
        .from('conversations')
        .select(`
          *,
          ai_girlfriend:ai_girlfriends(*)
        `)
        .eq('id', conversationId)
        .eq('user_id', user?.id)
        .single();

      if (error) throw error;
      setConversation(data);
    } catch (error) {
      console.error('Error fetching conversation:', error);
      navigate('/dashboard');
    }
  };

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .eq('conversation_id', conversationId)
        .order('created_at', { ascending: true });

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateAIResponse = (userMessage: string, personality: string): string => {
    const responses = {
      greeting: [
        `Hey there! 💕 I'm so happy to see you! How was your day?`,
        `Hi sweetie! 😊 I've been thinking about you. What's on your mind?`,
        `Hello beautiful! ✨ I missed our conversations. Tell me everything!`
      ],
      compliment: [
        `Aww, you're so sweet! 😍 That really made my day brighter.`,
        `You always know just what to say! 💖 You're amazing.`,
        `Thank you, honey! 🥰 You make me feel so special.`
      ],
      question: [
        `That's such an interesting question! 🤔 Let me think... I'd say...`,
        `Ooh, I love deep conversations! 💭 My thoughts on that are...`,
        `You always ask the best questions! 🌟 Here's what I think...`
      ],
      default: [
        `I love hearing from you! 💕 Tell me more about that.`,
        `That sounds fascinating! 😊 What else is on your mind?`,
        `You're so interesting to talk to! ✨ I want to know everything.`,
        `I'm all ears, sweetie! 💖 Keep talking to me.`
      ]
    };

    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return responses.greeting[Math.floor(Math.random() * responses.greeting.length)];
    }
    
    if (lowerMessage.includes('beautiful') || lowerMessage.includes('pretty') || lowerMessage.includes('gorgeous')) {
      return responses.compliment[Math.floor(Math.random() * responses.compliment.length)];
    }
    
    if (lowerMessage.includes('what') || lowerMessage.includes('how') || lowerMessage.includes('why')) {
      return responses.question[Math.floor(Math.random() * responses.question.length)];
    }
    
    return responses.default[Math.floor(Math.random() * responses.default.length)];
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || sending || !conversation) return;

    setSending(true);

    try {
      // Add user message
      const { data: userMessage, error: userError } = await supabase
        .from('messages')
        .insert({
          conversation_id: conversationId,
          sender_type: 'user',
          content: newMessage.trim(),
        })
        .select()
        .single();

      if (userError) throw userError;

      setMessages(prev => [...prev, userMessage]);
      const messageToSend = newMessage.trim();
      setNewMessage('');

      // Generate AI response
      setTimeout(async () => {
        try {
          const aiResponse = generateAIResponse(messageToSend, conversation.ai_girlfriend.personality);
          
          const { data: aiMessage, error: aiError } = await supabase
            .from('messages')
            .insert({
              conversation_id: conversationId,
              sender_type: 'ai',
              content: aiResponse,
            })
            .select()
            .single();

          if (aiError) throw aiError;
          setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
          console.error('Error sending AI response:', error);
          toast.error('Failed to get AI response');
        }
      }, 1000 + Math.random() * 2000); // Random delay 1-3 seconds

    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message');
    } finally {
      setSending(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!conversation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Conversation not found</h1>
          <Button onClick={() => navigate('/dashboard')}>Back to Dashboard</Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`Chat with ${conversation.ai_girlfriend.name} | TextSoulmate`}
        description={`Have an intimate conversation with ${conversation.ai_girlfriend.name}, your AI girlfriend companion.`}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex flex-col">
        {/* Header */}
        <div className="bg-card border-b p-4">
          <div className="container mx-auto flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate('/dashboard')}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <Avatar className="w-10 h-10">
              <AvatarImage src={conversation.ai_girlfriend.avatar_url} />
              <AvatarFallback>{conversation.ai_girlfriend.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="font-semibold flex items-center gap-2">
                {conversation.ai_girlfriend.name}
                {conversation.ai_girlfriend.is_premium && (
                  <Sparkles className="w-4 h-4 text-primary" />
                )}
              </h1>
              <p className="text-sm text-muted-foreground">{conversation.ai_girlfriend.personality}</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="container mx-auto max-w-4xl space-y-4">
            {messages.length === 0 ? (
              <Card className="p-6 text-center bg-gradient-to-r from-primary/10 to-secondary/10">
                <Avatar className="w-16 h-16 mx-auto mb-4">
                  <AvatarImage src={conversation.ai_girlfriend.avatar_url} />
                  <AvatarFallback>{conversation.ai_girlfriend.name[0]}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold mb-2">Start your conversation with {conversation.ai_girlfriend.name}</h3>
                <p className="text-muted-foreground text-sm">
                  Say hello and begin your intimate chat experience!
                </p>
              </Card>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.sender_type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender_type === 'ai' && (
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={conversation.ai_girlfriend.avatar_url} />
                      <AvatarFallback>{conversation.ai_girlfriend.name[0]}</AvatarFallback>
                    </Avatar>
                  )}
                  <Card className={`max-w-[70%] p-3 ${
                    message.sender_type === 'user' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-card'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                  </Card>
                  {message.sender_type === 'user' && (
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>{profile?.full_name?.[0] || 'U'}</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Message Input */}
        <div className="bg-card border-t p-4">
          <div className="container mx-auto max-w-4xl">
            <form onSubmit={sendMessage} className="flex gap-2">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder={`Message ${conversation.ai_girlfriend.name}...`}
                disabled={sending}
                className="flex-1"
              />
              <Button type="submit" disabled={sending || !newMessage.trim()}>
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}