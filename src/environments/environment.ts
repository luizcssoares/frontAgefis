// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlVaga : 'http://localhost:8080/api/vaga',
  urlTempoMedio : 'http://localhost:8080/api/relatorio/tempomedio',
  urlOcupacao : 'http://localhost:8080/api/ocupacao',
  urlDesocupacao : 'http://localhost:8080/api/desocupacao',
  urlConfiguracao : 'http://localhost:8080/api/config',
  urlMovimento : 'http://localhost:8080/api/relatorio/movimento',
  urlFinanceiro : 'http://localhost:8080/api/relatorio/financeiro'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
