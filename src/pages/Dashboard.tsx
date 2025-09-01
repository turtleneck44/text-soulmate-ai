import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Heart, MessageCircle, Crown, Sparkles } from 'lucide-react';
import { SEO } from '@/components/seo/SEO';
import { useNavigate } from 'react-router-dom';

interface AIGirlfriend {
  id: string;
  name: string;
  personality: string;
  description: string;
  is_premium: boolean;
  avatar_url?: string;
}

interface Conversation {
  id: string;
  title: string;
  ai_girlfriend: AIGirlfriend;
  updated_at: string;
}

export default function Dashboard() {
  const { user, profile, signOut } = useAuth();
  const [aiGirlfriends, setAiGirlfriends] = useState<AIGirlfriend[]>([]);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
      return;
    }

    fetchData();
  }, [user, navigate]);

  const fetchData = async () => {
    try {
      // Fetch AI girlfriends
      const { data: girlfriends, error: girlfriendsError } = await supabase
        .from('ai_girlfriends')
        .select('*')
        .order('name');

      if (girlfriendsError) throw girlfriendsError;
      setAiGirlfriends(girlfriends || []);

      // Fetch user's conversations
      const { data: convos, error: convosError } = await supabase
        .from('conversations')
        .select(`
          *,
          ai_girlfriend:ai_girlfriends(*)
        `)
        .eq('user_id', user?.id)
        .order('updated_at', { ascending: false });

      if (convosError) throw convosError;
      setConversations(convos || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const startConversation = async (girlfriendId: string) => {
    try {
      const girlfriend = aiGirlfriends.find(g => g.id === girlfriendId);
      if (!girlfriend) return;

      // Check if premium girlfriend and user doesn't have premium
      if (girlfriend.is_premium && profile?.subscription_tier === 'free') {
        navigate('/pricing');
        return;
      }

      const { data, error } = await supabase
        .from('conversations')
        .insert({
          user_id: user?.id,
          ai_girlfriend_id: girlfriendId,
          title: `Chat with ${girlfriend.name}`,
        })
        .select()
        .single();

      if (error) throw error;
      navigate(`/chat/${data.id}`);
    } catch (error) {
      console.error('Error starting conversation:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title="Dashboard - Your AI Companions | TextSoulmate"
        description="Access your AI girlfriend conversations, start new chats, and manage your TextSoulmate account."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Welcome back, {profile?.full_name}!</h1>
              <p className="text-muted-foreground">Choose an AI companion to start chatting</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant={profile?.subscription_tier === 'premium' ? 'default' : 'secondary'}>
                {profile?.subscription_tier === 'premium' ? (
                  <>
                    <Crown className="w-3 h-3 mr-1" />
                    Premium
                  </>
                ) : (
                  'Free Plan'
                )}
              </Badge>
              <Button variant="outline" onClick={signOut}>
                Sign Out
              </Button>
            </div>
          </div>

          {/* Recent Conversations */}
          {conversations.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Recent Conversations
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {conversations.slice(0, 3).map((conversation) => (
                  <Card key={conversation.id} className="cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => navigate(`/chat/${conversation.id}`)}>
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={conversation.ai_girlfriend.avatar_url} />
                          <AvatarFallback>{conversation.ai_girlfriend.name[0]}</AvatarFallback>
                        </Avatar>
                        {conversation.ai_girlfriend.name}
                        {conversation.ai_girlfriend.is_premium && (
                          <Sparkles className="w-4 h-4 text-primary" />
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {conversation.title}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Available AI Girlfriends */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Available Companions
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {aiGirlfriends.map((girlfriend) => (
                <Card key={girlfriend.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={girlfriend.avatar_url} />
                        <AvatarFallback>{girlfriend.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="flex items-center gap-2">
                          {girlfriend.name}
                          {girlfriend.is_premium && (
                            <Badge variant="default" className="text-xs">
                              <Sparkles className="w-3 h-3 mr-1" />
                              Premium
                            </Badge>
                          )}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {girlfriend.personality}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {girlfriend.description}
                    </p>
                    <Button 
                      onClick={() => startConversation(girlfriend.id)}
                      className="w-full"
                      variant={girlfriend.is_premium && profile?.subscription_tier === 'free' ? 'outline' : 'default'}
                    >
                      {girlfriend.is_premium && profile?.subscription_tier === 'free' 
                        ? 'Upgrade to Chat' 
                        : 'Start Chatting'
                      }
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Upgrade CTA for free users */}
          {profile?.subscription_tier === 'free' && (
            <Card className="mt-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-primary" />
                  Unlock Premium Companions
                </CardTitle>
                <CardDescription>
                  Get access to exclusive AI companions with premium personalities and features.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={() => navigate('/pricing')} className="w-full sm:w-auto">
                  Upgrade to Premium
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </>
  );
}