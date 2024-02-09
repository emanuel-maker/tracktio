import { TCompany } from './Company';

export type TCompanyRepository = {
  getCompanyByOwner({ owner }: { owner: string }): Promise<TCompany>; // posible pattern criteria :) match methods and filter
};
