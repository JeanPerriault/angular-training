import { Prestation } from 'src/app/shared/models/prestations.model';
import { State } from 'src/app/shared/enums/state.enum';

export const fakeColleciton: Prestation[] = [
  new Prestation({
    id: 'a1',
    type_presta: 'formation',
    client: 'Atos',
    nb_jours: 2,
    tjm_ht: 700,
    state: State.OPTION
  }),
  new Prestation({
    id: 'a2',
    type_presta: 'coaching',
    client: 'CapGemini',
    nb_jours: 20,
    tjm_ht: 900,
    state: State.CONFIRM
  })
];
