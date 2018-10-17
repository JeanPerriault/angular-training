import { ClientI } from '../interfaces/client-i';
import { ClientState } from '../enums/client-state.enum';

export class Client implements ClientI {

  id: string;
  nom: string;
  adresse: string;
  codePostal: number;
  ville: string;
  tjm_ht = 0;
  taux_tva = 20;
  state = ClientState.INACTIVE;


  constructor (field?: Partial<Client>) {
    if (field) {
      Object.assign(this, field);
    }
  }
}
