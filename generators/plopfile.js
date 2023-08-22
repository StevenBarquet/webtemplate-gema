module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nombre de tu componente?',
      },
      {
        type: 'input',
        name: 'path',
        message:
          'Path de tu componente? (click derecho copy path en el FOLDER donde quieres tu componente)',
      },
      {
        type: 'confirm',
        name: 'haveStyles',
        message: 'Tu componente incluye estilos?',
        default: false,
      },
      {
        type: 'confirm',
        name: 'haveProps',
        message: 'Tu componente recibe props?',
        default: false,
      },
    ],
    actions: ({ haveStyles, haveProps }) => {
      const styleType = haveStyles ? 'withStyle' : 'noStyle';
      const propsType = haveProps ? '' : 'NoProps';

      const compTemplate = {
        type: 'add',
        path: '{{path}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: `templates/components/${styleType}${propsType}Component.tsx.hbs`,
      };

      const styles = {
        type: 'add',
        path: '{{path}}/{{pascalCase name}}/{{pascalCase name}}.module.scss',
        templateFile: `templates/components/compStyles.module.scss.hbs`,
      };

      const locales = [
        {
          type: 'add',
          path: '{{path}}/{{pascalCase name}}/locales/use{{pascalCase name}}Locales.ts',
          templateFile: 'templates/page/localesHook.ts.hbs',
        },
        {
          type: 'add',
          path: '{{path}}/{{pascalCase name}}/locales/locales.ts',
          templateFile: 'templates/page/locales.ts.hbs',
        },
      ];

      let actions = [compTemplate];
      if (haveStyles) {
        actions.push(styles);
      }
      return actions;
    },
  });
};
