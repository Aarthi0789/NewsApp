import { Component, OnInit } from '@angular/core';
import { MostViwedService } from 'src/app/services/most-viwed.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  data:any
  constructor(private mostViwedService: MostViwedService) { }

  ngOnInit(): void {

    this.mostViwedService.getShareData().subscribe(response=>{
       this.data=response['nationalHeadlines'];
      console.log(this.data, 'populardata');
     })
     
    
  }

  mostViewed = [
    {
      mainImage: "https://ichef.bbci.co.uk/news/800/cpsprodpb/0624/production/_116127510_9fbe16f9-0ce7-4e9b-b4cd-47f193ad4d14.jpg.webp",
      mainHeadLine: "కేసీఆర్ ‘ఓదార్పు యాత్ర’..!కేసీఆర్ ‘ఓదార్పు యాత్ర’..!",
      mainHeadContent: " జాతీయ రాజకీయాల్లో క్రియాశీలక పాత్ర పోషించాలని భావిస్తోన్న తెలంగాణ సీఎం కేసీఆర్.. అందుకు రంగం సిద్ధం చేసుకుంటున్నారు. ఇప్పటికే మహారాష్ట్ర సీఎం ఉద్దవ్ ఠాక్రే, తమిళనాడు ముఖ్యమంత్రి స్టాలిన్, బెంగాల్ సీఎం మమతా బెనర్జీ తదితరులను కలిసిన ఆయన పలువురు నేతలతో టచ్‌లో ఉన్నారు.  ",
      date: new Date(),
      author: "Dharma Bharam",
      chat: "",

    }
  ]

  subviews = [
    {
    subImage: "https://ichef.bbci.co.uk/news/800/cpsprodpb/0624/production/_116127510_9fbe16f9-0ce7-4e9b-b4cd-47f193ad4d14.jpg.webp",
    subContent: "జాతీయ రాజకీయాల్లో క్రియాశీలక పాత్ర పోషించాలని భావిస్తోన్న తెలంగాణ సీఎం కేసీఆర్.. అందుకు రంగం సిద్ధం చేసుకుంటున్నారు. ఇప్పటికే మహారాష్ట్ర సీఎం ఉద్దవ్ ఠాక్రే, "
  },
  {
    subImage: "https://ichef.bbci.co.uk/news/800/cpsprodpb/0624/production/_116127510_9fbe16f9-0ce7-4e9b-b4cd-47f193ad4d14.jpg.webp",
    subContent: "జాతీయ రాజకీయాల్లో క్రియాశీలక పాత్ర పోషించాలని భావిస్తోన్న తెలంగాణ సీఎం కేసీఆర్.. అందుకు రంగం సిద్ధం చేసుకుంటున్నారు. ఇప్పటికే మహారాష్ట్ర సీఎం ఉద్దవ్ ఠాక్రే, "
  },
  {
    subImage: "https://ichef.bbci.co.uk/news/800/cpsprodpb/0624/production/_116127510_9fbe16f9-0ce7-4e9b-b4cd-47f193ad4d14.jpg.webp",
    subContent: "జాతీయ రాజకీయాల్లో క్రియాశీలక పాత్ర పోషించాలని భావిస్తోన్న తెలంగాణ సీఎం కేసీఆర్.. అందుకు రంగం సిద్ధం చేసుకుంటున్నారు. ఇప్పటికే మహారాష్ట్ర సీఎం ఉద్దవ్ ఠాక్రే, "
  },
  {
    subImage: "https://ichef.bbci.co.uk/news/800/cpsprodpb/0624/production/_116127510_9fbe16f9-0ce7-4e9b-b4cd-47f193ad4d14.jpg.webp",
    subContent: "జాతీయ రాజకీయాల్లో క్రియాశీలక పాత్ర పోషించాలని భావిస్తోన్న తెలంగాణ సీఎం కేసీఆర్.. అందుకు రంగం సిద్ధం చేసుకుంటున్నారు. ఇప్పటికే మహారాష్ట్ర సీఎం ఉద్దవ్ ఠాక్రే, "
  }
  ]

}
