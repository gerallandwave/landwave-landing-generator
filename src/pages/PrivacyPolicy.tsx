import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
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
          <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>
          
          <p className="text-muted-foreground mb-6">
            Última atualização: {new Date().toLocaleDateString('pt-PT')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introdução</h2>
            <p>
              A Landwave respeita a sua privacidade e está comprometida em proteger os seus dados pessoais. 
              Esta política de privacidade informa-o sobre como tratamos os seus dados pessoais quando visita 
              o nosso website e informa-o sobre os seus direitos de privacidade e como a lei o protege.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Dados que Recolhemos</h2>
            <p>Podemos recolher, usar, armazenar e transferir diferentes tipos de dados pessoais sobre si:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Dados de Identidade:</strong> nome, apelido</li>
              <li><strong>Dados de Contacto:</strong> endereço de email, número de telefone</li>
              <li><strong>Dados Técnicos:</strong> endereço IP, tipo de browser, fuso horário</li>
              <li><strong>Dados de Utilização:</strong> informação sobre como utiliza o nosso website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Como Utilizamos os Seus Dados</h2>
            <p>Utilizamos os seus dados pessoais para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder aos seus pedidos de informação</li>
              <li>Fornecer os nossos serviços de criação de landing pages</li>
              <li>Melhorar o nosso website e serviços</li>
              <li>Enviar comunicações de marketing (com o seu consentimento)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Base Legal para o Tratamento</h2>
            <p>
              Processamos os seus dados pessoais com base no seu consentimento, na execução de um contrato, 
              no cumprimento de obrigações legais ou no nosso interesse legítimo em fornecer e melhorar os nossos serviços.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Partilha de Dados</h2>
            <p>
              Não vendemos os seus dados pessoais. Podemos partilhar os seus dados com prestadores de serviços 
              terceiros que nos ajudam a operar o nosso website e fornecer os nossos serviços, sempre sob 
              obrigações contratuais de confidencialidade.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Os Seus Direitos</h2>
            <p>De acordo com o RGPD, tem o direito de:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Solicitar acesso aos seus dados pessoais</li>
              <li>Solicitar a correção dos seus dados pessoais</li>
              <li>Solicitar a eliminação dos seus dados pessoais</li>
              <li>Opor-se ao tratamento dos seus dados pessoais</li>
              <li>Solicitar a limitação do tratamento dos seus dados pessoais</li>
              <li>Solicitar a portabilidade dos seus dados pessoais</li>
              <li>Retirar o consentimento em qualquer momento</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Segurança dos Dados</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger 
              os seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Retenção de Dados</h2>
            <p>
              Apenas mantemos os seus dados pessoais pelo tempo necessário para cumprir os propósitos 
              para os quais os recolhemos, incluindo para satisfazer quaisquer requisitos legais, 
              contabilísticos ou de reporte.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Contacto</h2>
            <p>
              Se tiver questões sobre esta política de privacidade ou sobre como tratamos os seus dados pessoais, 
              contacte-nos através de:
            </p>
            <p className="mt-4">
              <strong>Email:</strong> gerallandwave@gmail.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Alterações a Esta Política</h2>
            <p>
              Podemos atualizar esta política de privacidade periodicamente. Iremos notificá-lo de quaisquer 
              alterações publicando a nova política de privacidade nesta página e atualizando a data de 
              "Última atualização".
            </p>
          </section>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
