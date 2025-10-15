# Como iniciar o repositório Git

1. Abra o terminal na pasta do projeto.
2. Execute:
	```powershell
	git init
	git add .
	git commit -m "Primeiro commit"
	```
3. (Opcional) Para conectar a um repositório remoto:
	```powershell
	git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
	git push -u origin master
	```

# Arquivos importantes
- .gitignore: Adicione arquivos e pastas que não devem ser versionados.
# Non-Profit Organization Website

This project is a simple website for a non-profit organization, designed to provide information about the organization, its projects, and how individuals can get involved.

## Project Structure

```
non-profit-website
├── index.html
├── projetos.html
├── cadastro.html
├── css
│   └── styles.css
├── js
│   └── main.js
├── .gitignore
└── README.md
```

## Files Description

- **index.html**: The homepage of the non-profit organization, featuring the organization's mission, vision, values, team information, and contact details.
  
- **projetos.html**: A page dedicated to showcasing the current projects of the organization, including descriptions, images, and information on how to volunteer or donate.
  
- **cadastro.html**: A registration form for volunteers, allowing them to sign up and get involved with the organization.
  
- **css/styles.css**: The stylesheet for the website, ensuring a cohesive and appealing design across all pages.
  
- **js/main.js**: JavaScript file for adding functionalities such as input masks for CPF, phone, and CEP fields in the registration form.
  
- **.gitignore**: Specifies files and directories that should be ignored by version control systems.
  
## Setup Instructions

1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser to view the homepage.
3. Navigate through the website using the provided links in the navigation menu.
4. Ensure that you have a local server running if you want to test any JavaScript functionalities.
