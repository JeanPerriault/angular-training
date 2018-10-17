import { Client } from 'src/app/shared/models/clients.model';
import { ClientState } from 'src/app/shared/enums/client-state.enum';

// public buildClients (): Client[] {
//   let array = [];
//   let i = 1;
//   array.forEach(element => {
//     array.push({
//       id: '1',
//       nom: 'Atos',
//       adresse: 'Atos valley',
//       codePostal: 38100,
//       ville: 'Grenoble',
//       tjm_ht: 700,
//       state: ClientState.ACTIVE
//     });
//     i++;
//   });
// }

export const fakeColleciton: Client[] = [
  new Client({
    id: '1',
    nom: 'Atos',
    adresse: 'Atos valley',
    codePostal: 38100,
    ville: 'Grenoble',
    tjm_ht: 700,
    state: ClientState.ACTIVE
  }),
  new Client({
    id: '2',
    nom: 'CapGemini',
    adresse: 'CapGemini valley',
    codePostal: 38100,
    ville: 'Grenoble',
    tjm_ht: 900,
    state: ClientState.INACTIVE
  })
];

