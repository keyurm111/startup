
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
}

const TestimonialCard = ({ quote, author, role, company, avatarUrl }: TestimonialCardProps) => {
  return (
    <div className="bg-startup-input rounded-xl p-6 flex flex-col h-full">
      <div className="text-startup-blue text-2xl mb-2">
        <span className="text-4xl">"</span>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-startup-blue text-startup-blue" />
        ))}
      </div>
      
      <p className="text-gray-300 mb-6 flex-grow">{quote}</p>
      
      <div className="flex items-center mt-auto">
        <img 
          src={avatarUrl} 
          alt={author}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <p className="font-semibold text-white">{author}</p>
          <p className="text-sm text-gray-400">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
