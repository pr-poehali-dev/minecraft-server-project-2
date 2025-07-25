import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const rules = [
    {
      icon: 'Sword',
      title: 'Без гриферства',
      description: 'Запрещено ломать чужие постройки и портить игру другим игрокам'
    },
    {
      icon: 'Shield',
      title: 'Уважение к игрокам',  
      description: 'Будьте вежливы в чате, не используйте мат и оскорбления'
    },
    {
      icon: 'Pickaxe',
      title: 'Честная игра',
      description: 'Запрещены читы и любые программы дающие преимущество'
    },
    {
      icon: 'Home',
      title: 'Не спамить',
      description: 'Не флудите в чате и не злоупотребляйте капсом'
    },
    {
      icon: 'Building',
      title: 'Зона постройки',
      description: 'Постройки разрешены от 500 блоков от спавна и дальше'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 via-green-400 to-green-600">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(/img/6dc22cae-6cfb-473b-a7a6-ad6408ec97db.jpg)',
            imageRendering: 'pixelated'
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="inline-block bg-gradient-to-r from-green-600 to-green-800 p-1 rounded-lg mb-6 shadow-2xl border-4 border-green-900">
            <h1 className="text-6xl font-bold text-white px-8 py-4 bg-gradient-to-b from-green-500 to-green-700 rounded" 
                style={{ fontFamily: 'monospace', textShadow: '4px 4px 0px #2d5016' }}>
              МайнШах
            </h1>
          </div>
          <p className="text-2xl text-white font-bold mb-8 drop-shadow-lg" 
             style={{ textShadow: '2px 2px 0px #1a4c40' }}>
            ⚔️ Лучший игровой сервер Minecraft ⚔️
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 text-lg border-4 border-green-800 shadow-xl transform hover:scale-105 transition-all">
              <Icon name="Play" className="mr-2" />
              Начать играть
            </Button>
            <Button variant="outline" className="bg-white/90 hover:bg-white text-green-800 font-bold py-4 px-8 text-lg border-4 border-green-600 shadow-xl transform hover:scale-105 transition-all">
              <Icon name="Users" className="mr-2" />
              Онлайн: 247
            </Button>
          </div>
          <div className="flex justify-center gap-6 text-white">
            <Badge className="bg-blue-600 text-white px-4 py-2 text-lg font-bold border-2 border-blue-800">
              💎 Версия 1.20.1
            </Badge>
            <Badge className="bg-orange-600 text-white px-4 py-2 text-lg font-bold border-2 border-orange-800">
              🏆 Топ рейтинг
            </Badge>
          </div>
        </div>
      </div>

      {/* Rules Section */}
      <div className="bg-gradient-to-b from-green-600 to-green-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12" 
              style={{ fontFamily: 'monospace', textShadow: '3px 3px 0px #1a4c40' }}>
            📜 Правила сервера
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {rules.map((rule, index) => (
              <Card key={index} className="bg-white/95 border-4 border-gray-600 shadow-2xl transform hover:scale-105 transition-all hover:shadow-3xl">
                <CardHeader className="text-center pb-2">
                  <div className="w-16 h-16 bg-green-600 rounded-lg mx-auto mb-4 flex items-center justify-center border-4 border-green-800 shadow-lg">
                    <Icon name={rule.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800" style={{ fontFamily: 'monospace' }}>
                    {rule.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-center font-medium">
                    {rule.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Server Info Section */}
      <div className="bg-gradient-to-b from-green-800 to-green-900 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-8" 
                style={{ fontFamily: 'monospace', textShadow: '3px 3px 0px #1a4c40' }}>
              🎮 Информация о сервере
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border-4 border-green-700 shadow-xl">
                <Icon name="Server" size={48} className="text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">IP адрес</h3>
                <p className="text-green-200 text-xl font-mono">PedroRUS1.aternos.me</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border-4 border-green-700 shadow-xl">
                <Icon name="Clock" size={48} className="text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Аптайм</h3>
                <p className="text-blue-200 text-xl font-mono">99.9%</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border-4 border-green-700 shadow-xl">
                <Icon name="Gamepad2" size={48} className="text-orange-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Режимы</h3>
                <p className="text-orange-200 text-xl">Выживание</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;