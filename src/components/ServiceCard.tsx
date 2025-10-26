import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface ServiceCardProps {
  title: string;
  image: string;
  features: string[];
}

const ServiceCard = ({ title, image, features }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-muted-foreground">
              <span className="text-primary mt-1">•</span>
              <span className="flex-1">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
