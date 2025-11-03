import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
        </Link>

        <article className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8">Política de Cookies</h1>
          
          <p className="text-muted-foreground mb-6">
            Última atualização: {new Date().toLocaleDateString('pt-PT')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. O que são Cookies?</h2>
            <p>
              Cookies são pequenos ficheiros de texto que são colocados no seu dispositivo quando visita 
              um website. São amplamente utilizados para fazer os websites funcionarem, ou funcionarem 
              de forma mais eficiente, bem como para fornecer informações aos proprietários do website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Como Utilizamos Cookies</h2>
            <p>
              Utilizamos cookies para várias razões, detalhadas abaixo. Infelizmente, na maioria dos casos, 
              não existem opções padrão da indústria para desativar cookies sem desativar completamente 
              a funcionalidade e recursos que eles adicionam a este website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Tipos de Cookies que Utilizamos</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">Cookies Essenciais</h3>
            <p>
              Estes cookies são necessários para o funcionamento do website e não podem ser desativados 
              nos nossos sistemas. Geralmente, são apenas definidos em resposta a ações realizadas por si 
              que correspondem a um pedido de serviços.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Cookies de Desempenho</h3>
            <p>
              Estes cookies permitem-nos contar visitas e fontes de tráfego para que possamos medir e 
              melhorar o desempenho do nosso website. Ajudam-nos a saber quais as páginas mais e menos 
              populares e a ver como os visitantes se movimentam pelo website.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Cookies Funcionais</h3>
            <p>
              Estes cookies permitem que o website forneça funcionalidade e personalização melhoradas. 
              Podem ser definidos por nós ou por fornecedores terceiros cujos serviços adicionámos às nossas páginas.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Cookies de Marketing</h3>
            <p>
              Estes cookies podem ser definidos através do nosso website pelos nossos parceiros de publicidade. 
              Podem ser usados por essas empresas para construir um perfil dos seus interesses e mostrar-lhe 
              anúncios relevantes noutros websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Cookies de Terceiros</h2>
            <p>
              Em alguns casos especiais, também utilizamos cookies fornecidos por terceiros de confiança. 
              As seguintes secções detalham quais cookies de terceiros pode encontrar através deste website:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Este website utiliza o Google Analytics para nos ajudar a compreender como utiliza o website</li>
              <li>Periodicamente testamos novos recursos e fazemos alterações subtis na forma como o website é apresentado</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Como Gerir Cookies</h2>
            <p>
              Pode gerir as suas preferências de cookies através do banner de consentimento que aparece 
              quando visita o nosso website pela primeira vez. Também pode ajustar as configurações do 
              seu browser para recusar cookies, mas note que fazer isso pode afetar a funcionalidade do website.
            </p>
            <p className="mt-4">
              A maioria dos browsers permite que controle os cookies através das suas configurações. 
              No entanto, se limitar a capacidade dos websites de definir cookies, pode piorar a sua 
              experiência geral do utilizador.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Cookies Específicos que Utilizamos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cookie de Consentimento:</strong> Armazena a sua preferência de cookies</li>
              <li><strong>Cookies de Sessão:</strong> Mantêm-no autenticado enquanto navega no website</li>
              <li><strong>Cookies de Preferências:</strong> Lembram as suas configurações e preferências</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Desativar Cookies</h2>
            <p>
              Pode prevenir a definição de cookies ajustando as configurações no seu browser. 
              Esteja ciente de que desativar cookies afetará a funcionalidade deste e de muitos 
              outros websites que visita. Por isso, é recomendado que não desative cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Contacto</h2>
            <p>
              Se tiver questões sobre esta política de cookies, contacte-nos através de:
            </p>
            <p className="mt-4">
              <strong>Email:</strong> gerallandwave@gmail.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Mais Informações</h2>
            <p>
              Esperamos que isto tenha esclarecido as coisas para si. Como mencionado anteriormente, 
              se houver algo de que não tenha a certeza se precisa ou não, geralmente é mais seguro 
              deixar os cookies ativados caso interaja com uma das funcionalidades que utiliza no nosso website.
            </p>
            <p className="mt-4">
              Para mais informações sobre cookies e como geri-los, visite{" "}
              <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                www.allaboutcookies.org
              </a>
            </p>
          </section>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
