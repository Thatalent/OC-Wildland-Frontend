import Button from '@mui/material/Button';

interface HeroComponentProps {
  title: string;
  subtitle: string;
  buttons?: Array<{ text: string; link: string }>;
  backgroundImage?: string;
}

const HeroComponent: React.FC<HeroComponentProps> = ({ title, subtitle, buttons, backgroundImage }) => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      {buttons && (
        <div className="hero-buttons">
          {buttons.map((button, index) => (
            <Button key={index} href={button.link} className="hero-button">
              {button.text}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroComponent;