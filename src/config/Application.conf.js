/*
 * Config file -- @author: Anthony.G
 * @title: Position Configuration
 */

/*
 * Configuration de l'affichage des gros domaines sur la page d'acceuil.
 * Cette variable JSON doit être configuré avec les positions souhaités.
 */

const themeJSON = require('./theme.json');
const wordingJSON = require('./wording.json');

export const positionObject = Object.freeze(themeJSON.position);

// Position
export const position = (data) => {
  if (Object.keys(positionObject).includes(data)) {
    return positionObject[data];
  }
  return { position: 30, name: 'NULL' };
};

// Environnement configuration
/*
 * Configuration de l'environnement des Index.
 * Les configurations des Endpoints se fait dans les dev.conf.js et prod.conf.js
 * pour le moment.
 */
// =========================================

// Ici on a la liste des environnements possible sous l'ELS.
export const environnement = ['blue', 'green'];

/*
 * La liste des index de l'ELS pour configurer leur nom.
 * indexMetas: l'index qui va contenir les metas-données de l'API.
 * indexMd: l'index qui va contenir le contenu des documents Markdown.
 */
export const indexMetas = 'testindex';
export const indexMd = 'testindexmd';

// Où se trouve le document menuJson.
export const menuJson = '/conf/conf-menu.json';
export const theme = themeJSON;
export const wording = wordingJSON[themeJSON.locale];
export const feedback = 'agriffon@oui.sncf';
