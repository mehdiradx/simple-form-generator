import { Condition, ElementTypes } from '~/ts';

interface Element {
  id: string;
  type: ElementTypes;
  name: string;
  choices?: string[];
  requiredIf?: Condition[];
  visibleIf?: Condition[];
  editableIf?: Condition[];
}

export default Element;
