import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-1.5 font-mono text-xs text-[#4A6741]" aria-label="Breadcrumb">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-[#C8B99A]">›</span>}
          {item.path ? (
            <Link to={item.path} className="hover:text-[#23412F] transition-colors">{item.label}</Link>
          ) : (
            <span className="text-[#3A3A38]">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
