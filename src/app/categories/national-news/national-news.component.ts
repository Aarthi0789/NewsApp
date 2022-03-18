import { Component, OnInit } from '@angular/core';
import { MostViwedService } from 'src/app/services/most-viwed.service';

@Component({
  selector: 'app-national-news',
  templateUrl: './national-news.component.html',
  styleUrls: ['./national-news.component.scss']
})
export class NationalNewsComponent implements OnInit {

  constructor(private mostViwedService: MostViwedService) { }

  ngOnInit(): void {

    this.mostViwedService.setShareData(this.nationalHeadlines);

   
  }

  nationalHeadlines=[
    {
      NImage:"https://ichef.bbci.co.uk/news/800/cpsprodpb/13A1D/production/_105931408_gettyimages-1081415952.jpg.webp",
      NheadLine:"క్రెయిన్ - రష్యా యుద్ధం: మరియుపూల్‌లో మళ్లీ కాల్పుల విరమణ ",
      Npara1:"యుక్రెయిన్ మీద రష్యా దండయాత్ర మొదలై వారం రోజులవుతోంది. ఈ సైనిక దాడికి సంబంధించి నకిలీ లేదా తప్పుదోవ పట్టించే వీడియోలు, ఫొటోలు వైరల్ అవటం కూడా కొనసాగుతోంది.",
      Npara2:"యుక్రెయిన్ మీద రష్యా దండయాత్ర మొదలై వారం రోజులవుతోంది. ఈ సైనిక దాడికి సంబంధించి నకిలీ లేదా తప్పుదోవ పట్టించే వీడియోలు, ఫొటోలు వైరల్ అవటం కూడా కొనసాగుతోంది.",
      Npara3:"యుక్రెయిన్ మీద రష్యా దండయాత్ర మొదలై వారం రోజులవుతోంది. ఈ సైనిక దాడికి సంబంధించి నకిలీ లేదా తప్పుదోవ పట్టించే వీడియోలు, ఫొటోలు వైరల్ అవటం కూడా కొనసాగుతోంది."
    }
  ]

  impLinks=[
    {
      title:"BBC ISWOTY నామినీ పీవీ సింధు: రెండు ఒలింపిక్ పతకాలతో చరిత్ర సృష్టించిన తెలుగమ్మాయి"
    },
    {
      title:"BBC ISWOTY నామినీ పీవీ సింధు: రెండు ఒలింపిక్ పతకాలతో చరిత్ర సృష్టించిన తెలుగమ్మాయి"
    },
    {
      title:"BBC ISWOTY నామినీ పీవీ సింధు: రెండు ఒలింపిక్ పతకాలతో చరిత్ర సృష్టించిన తెలుగమ్మాయి"
    },
    
  ]

  sidecards=[
    {
      image:"https://static.langimg.com/thumb/msid-90028880,imgsize-46194,width-400,height-300,resizemode-75/samayam-telugu.jpg",
      text:"బ్యాడ్మింటన్ క్రీడాకారిణి పూసర్ల వెంకట సింధు (పీవీ సింధు) ఒలింపిక్స్‌లో రెండు వ్యక్తిగత పతకాలు సాధించిన తొలి భారతీయ మహిళ"
    },
    {
      image:"https://ichef.bbci.co.uk/news/800/cpsprodpb/118F2/production/_123422917_1c41cd8f-85bd-464b-90d2-3a91fb6dc45c.jpg.webp",
      text:"బ్యాడ్మింటన్ క్రీడాకారిణి పూసర్ల వెంకట సింధు (పీవీ సింధు) ఒలింపిక్స్‌లో రెండు వ్యక్తిగత పతకాలు సాధించిన తొలి భారతీయ మహిళ"
    },
    {
      image:"https://material.angular.io/assets/img/examples/shiba2.jpg",
      text:"బ్యాడ్మింటన్ క్రీడాకారిణి పూసర్ల వెంకట సింధు (పీవీ సింధు) ఒలింపిక్స్‌లో రెండు వ్యక్తిగత పతకాలు సాధించిన తొలి భారతీయ మహిళ"
    }
  ]
}
