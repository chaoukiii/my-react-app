import React from 'react';

const ELLIPSIS = '\u2026';

interface ChipListProps {
  chips?: { label: string }[];
  maxChips?: number;
  maxTextLength?: number;
}

interface ChipProps {
  label: string;
}

export const ChipList = ({ chips, maxChips, maxTextLength }: ChipListProps) => {
  const show = () => {



    if (!chips || chips.length === 0) {
      return null;
    }

    const part = maxChips ? chips.slice(0, maxChips) : chips;




    
    return part.map((chip, index) => (
      <div
        style={{
          border: '1px solid #bbbbbb',
          padding: '4px',
          borderRadius: '8px',
        }}
        data-testid={`chip-${index}`}
        key={index}
      >
        {chip.label.length > maxTextLength
          ? chip.label.slice(0, maxTextLength) + ELLIPSIS
          : chip.label}
      </div>
    ));
  };

  const extra = () => {
    if (!maxChips || !chips || chips.length <= maxChips) {
      return null;
    }

    const extra = chips.length - maxChips;

    return (
      <aside data-testid="exceeding-text">
        {extra}    {extra === 1 ? 'item' : 'items'}
      </aside>
    );
  };

  return (
    
    <section style={{ display: 'flex' }}>
      {show()}
      {extra()}
    </section>
  );
};

const sampleChips: ChipProps[] = [
  { label: '123456789' },
  { label: '123456' },
  { label: '1234567' },
  { label: '12345678' },
  { label: '12345' },
];

export default function App() {
  return <ChipList maxChips={3} maxTextLength={6} chips={sampleChips} />;
}



