### TAG COUNTER

Sistema Contador de tags de páginas estáticas em formato html com integração ao banco de dados.
Stack Utilizada
-Frontend
Linguages: HMT5, CSS3 e JAVASCRIPT
Bibliotecas: Vite
-Backend
Linguagem: TypeScript
Bibliotecas: tsx, express, uuid, pg, cors (todos com seus respectivos @types)

# Requisitos

Antes de prosseguir com a instalação, certifique-se de ter os seguintes requisitos instalados em sua máquina:

    node v.18.*
    Container contendo imagem do banco de dados POSTGRESQL ou server disponibilizados pela distribuidora e o pgAdmin ou qualquer outra interface visual com suporte ao POSTGRESQL
    (user: postgres, password: root, port: 5432)
    ...

# Instalação

    Navegue até a pasta src/resources/database/scripts.
    Copie os comandos SQL do arquivo compete-create.sql ou separadamento na ordem de criação respeitando as regras do SQL.

    No Frontend: - Navegue até a pasta front-end e execute o comando yarn ou do gerenciador de pacotes de sua preferência.
    	 - Caso opte por utilizar outro gerenciador diferente do yarn, tenha certeza de remover o arquivo yarn.lock da raiz para não causar problemas com os gerenciadores.

    No Backend   - Navegue até a pasta back-end e execute o comando yarn ou do gerenciador de pacotes de sua preferência.
    	 - Caso opte por utilizar outro gerenciador diferente do yarn, tenha certeza de remover o arquivo yarn.lock da raiz para não causar problemas com os gerenciadores.
    	 - Caso opte por escolher outro nome de banco de dados ou quaisquer dados de configuração à base de dados navegue até src/config/database.ts e altere os atributos da classe Database.

# Comandos de Inicialização

No Frontend: - Navegue até a pasta front-end e execute o comando yarn dev ou do gerenciador escolhido.

No Frontend: - Navegue até a pasta back-end e execute o comando yarn dev ou do gerenciador escolhido.
----Contato
Quaisquer dúvidas ou problemas/obstáculos encontrados que eu possa corrigir ou sugestões estarei disponível no email: marc.khk11@gmail.com
