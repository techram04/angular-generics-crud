import { ResourceModel } from './resource.model';

export class Unicorn extends ResourceModel<Unicorn> {
  public name!: string;
  public age!: number;
  public colour!: string;

  constructor(model?: Partial<Unicorn>) {
    super(model);
  }
}
