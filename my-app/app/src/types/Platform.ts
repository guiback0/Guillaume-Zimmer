export type SocialsProps = {
   image: string;
   name: string;
   mediumImage: string;
   description: string;
   wrapperType: 'link' | 'drawer';
   href?: string; // Ajoutez cette prop si vous utilisez <Link>
};
