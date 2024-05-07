# Conversor de Imagem para Arte ASCII

Este é um simples conversor de imagem para arte ASCII em Node.js. Ele utiliza a biblioteca `canvas` para redimensionar a imagem e calcular os caracteres ASCII correspondentes aos diferentes tons de cinza na imagem.

## Pré-requisitos

Certifique-se de ter o Node.js instalado em seu sistema.

## Como usar

1. Clone este repositório:

```sh
git clone https://github.com/seu-usuario/image-to-ascii.git
```

2. Instale as dependências:

```sh
npm install
```

3. Execute o conversor de imagem:

```sh
node index.js <caminho_para_imagem> <escala>
```

Substitua `<caminho_para_imagem>` pelo caminho para a imagem que você deseja converter e `<escala>` pelo fator de escala desejado (por exemplo, 2 para reduzir pela metade, 3 para reduzir para um terço, etc.).

4. O resultado será salvo em um arquivo de texto chamado `output.txt`.

## Exemplo

```sh
node converter.js mona_lisa.jpg 3
```

Este comando irá converter a imagem `mona_lisa.jpg` com uma escala de 3 e salvar o resultado em `output.txt`.
