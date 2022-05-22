import { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { ICard, selectCards } from "./cardsSlice";

function Card({ id }: { id: string }) {
  const cards: { [id: string]: ICard } = useAppSelector(selectCards);
  const card: ICard = cards[id];
  const [flipped, setFlipped] = useState<boolean>(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}></button>
      {flipped ? card.back : card.front}
    </li>
  );
}

export default Card;
