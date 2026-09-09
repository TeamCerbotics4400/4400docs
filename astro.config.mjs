// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Docs 4400",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
		{
			label: 'Documentación Cerbotics',
    		items: [{autogenerate: { directory: 'docs' }}],
		}
        
      ],
    }),
  ],
});
