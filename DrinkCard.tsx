import React from "react";

export interface Drink {
  id: number;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  ingredients: string[];
  components: string[];
}

type DrinkCardProps = {
  drink: Drink;
};

const DrinkCard: React.FC<DrinkCardProps> = ({ drink }) => {
  return (
    <article
      style={{
        border: "1px solid #d5e5dc",
        borderRadius: "12px",
        padding: "16px",
        marginBottom: "16px",
        display: "flex",
        gap: "16px",
      }}
    >
      <img
        src={drink.imageUrl}
        alt={drink.name}
        style={{
          width: "220px",
          height: "160px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />

      <div>
        <b><span style={{ color: "#37805f" }}>{drink.category}</span></b>
        <b><h2 style={{ margin: "4px 0 8px" }}>{drink.name}</h2></b>
        <p>{drink.description}</p>

        <h3><b>ส่วนประกอบ</b></h3>
        <ul>
          {drink.components.map((component) => (
            <li key={component}>- {component}</li>
          ))}
        </ul>

        <h3><b>วัตถุดิบ</b></h3>
        <p>{drink.ingredients.join(", ")}</p>
      </div>
    </article>
  );
};

export default DrinkCard;
