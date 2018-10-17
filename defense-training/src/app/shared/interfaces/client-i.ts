import { ClientState } from '../enums/client-state.enum';

export interface ClientI {
  id: string;
  nom: string;
  adresse: string;
  codePostal: number;
  ville: string;
  tjm_ht: number;
  taux_tva: number;
  state: ClientState;
}
