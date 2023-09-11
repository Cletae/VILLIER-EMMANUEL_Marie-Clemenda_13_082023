import { IconChat, IconMoney, IconSecurity } from "./Images";

const featureList = [
  {
    icon: IconChat,
    alt: "Chat Icon",
    title: "You are our #1 priority",
    text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    icon: IconMoney,
    alt: "Money Icon",
    title: "More savings means higher rates",
    text: "The more you save with us, the higher your interest rate will be!",
  },
  {
    icon: IconSecurity,
    alt: "Security Icon",
    title: "Security you can trust",
    text: "We use top of the line encryption to make sure your data and money is always safe.",
  },
];

const Feature = (props) => {
  const featureInfos = featureList[props.index];

  return (
    <div className="feature-item">
      <img
        src={featureInfos.icon}
        alt={featureInfos.alt}
        className="feature-icon"
      />
      <h3 className="feature-item-title">{featureInfos.title}</h3>
      <p>{featureInfos.text}</p>
    </div>
  );
};

export default Feature;
