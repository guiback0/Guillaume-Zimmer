
export const transformRepositories = (repositories) => {
   return repositories
       .map((repo) => ({
           name: repo.name,
           description: repo.description || "Aucune description.",
           html_url: repo.html_url,
           language: repo.language,
           
       }))
      
};