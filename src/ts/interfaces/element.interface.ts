import { ElementTypes } from '~/ts';

interface Element {
  id: string;
  type: ElementTypes;
  name: string;
  choices?: string[];
  requiredIf?: string; // TODO: refactor it to have a more precise type
  visibleIf?: string; // TODO: refactor it to have a more precise type
  editableIf?: string; // TODO: refactor it to have a more precise type
}

export default Element;
