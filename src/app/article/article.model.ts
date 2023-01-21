export default class Article {
    votes:number

    constructor(public title:string, public link:string,  votes?:number) {
        this.title = title
        this.link = link       
        this.votes  = votes || 0 
    }

    voteUp() {
        this.votes += 1
        
      }
      voteDown() {
        this.votes -= 1
        
      }
      domain() {
        try{
          const domainAndPath = this.link.split('//')[1]
          const domain  = domainAndPath.split('/')[0]
          return domain
        }
        catch(err) {
          return null
        }
        
      }
}