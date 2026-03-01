// src/components/common/LucideIcon.jsx
import * as Icons from 'lucide-react';

/**
 * Composant pour afficher dynamiquement une icône lucide-react à partir de son nom
 * @param {string} name - Nom de l'icône (ex: "User", "Building2", "Settings")
 * @param {number} size - Taille de l'icône (défaut: 20)
 * @param {string} className - Classes CSS additionnelles
 * @param {object} props - Autres props à passer à l'icône
 */
function LucideIcon({ name, size = 20, className = '', ...props }) {
  const IconComponent = Icons[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in lucide-react`);
    return null;
  }
  
  return <IconComponent size={size} className={className} {...props} />;
}

export default LucideIcon;
