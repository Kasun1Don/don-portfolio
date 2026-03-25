import { useGridStore } from "@/stores/use-grid-store";

interface CardExpansion {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export function useCardExpansion(cardId: string): CardExpansion {
  const { selected, setSelected } = useGridStore();

  const isOpen = selected === cardId;

  return {
    isOpen,
    onToggle: () => setSelected(isOpen ? undefined : cardId),
    onClose: () => setSelected(undefined),
  };
}
