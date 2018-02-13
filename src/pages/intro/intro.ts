import { Component } from '@angular/core';
import { ModalController,IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import { CategoriasProvider } from '../../providers/categorias/categorias';
import { Categoria } from '../../providers/categorias/categoria';

import { Storage } from '@ionic/storage';

import { VentaPage } from '../venta/venta';
import { PerfilProvider } from '../../providers/perfil/perfil';
import { UbicacionPage } from '../../pages/ubicacion/ubicacion';
import { PerfilPage } from '../perfil/perfil';
import { LoginPage } from '../login/login';
import { ServicioPage } from '../../pages/servicio/servicio';
import { HistorialPage } from '../historial/historial';
import { HistorialsociaPage } from '../historialsocia/historialsocia';
import { RegistroPage } from '../../pages/registro/registro';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AyudaPage } from '../ayuda/ayuda';
import { LoginprincipalPage } from '../loginprincipal/loginprincipal';


@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
  providers: [CategoriasProvider]
})


export class IntroPage {


categoria: Categoria[];

host='http://104.236.247.3:8000/'

  reservaPage: any;

  introPage: any;

  perfilPage: any;

  servicioPage:any;

  ventaPage:any;


  historialPage:any;
  ayudaPage:any;


  loginPage:any;

  registroPage:any;

  logeado:any;

nologeado:any;
user_grupo:any;

loginprincipalPage:any;


  constructor(public platform: Platform,public modalCtrl: ModalController,private socialSharing: SocialSharing,private storage: Storage,private _perfil: PerfilProvider,private _categoria: CategoriasProvider,public navCtrl: NavController, public navParams: NavParams) {


this._categoria.getcategorias()
      .subscribe(data => this.categoria = data);


    this.perfilPage = PerfilPage;

    this.introPage = IntroPage;

    this.servicioPage = ServicioPage;


    this.historialPage = HistorialPage;

    this.loginPage = LoginPage;

    this.loginprincipalPage = LoginprincipalPage;

    this.ventaPage=VentaPage;

    this.ayudaPage=AyudaPage;

 

  }


 loginModal() {
   let profileModal = this.modalCtrl.create(LoginprincipalPage, { userId: 8675309 });
   profileModal.present();
 }


  ionViewDidLoad() {

    console.log('intro page-intro....','ionViewDidLoad')

  
  }

  ionViewWillEnter(){



       // this.storage.get('grupo').then((val) => {


       //                        console.log('Historiamskksls',val)

       //                        if(val=='Socia'){

       //                          this.navCtrl.push(HistorialsociaPage);

                                  
       //                        }
                              
       //                      });



  }

  iraventas(data){

 
   this.navCtrl.push(VentaPage, {
      categoria: data,
    })



}

 



    shareSheetShare() {
    this.socialSharing.share("Registrate", "Atreveteeetee sal del closeet", "https://st2.depositphotos.com/5328332/12205/v/950/depositphotos_122057578-stock-illustration-express-delivery-of-fashion-and.jpg", "https://play.google.com/store/apps/details?id=io.codigito.mylookexpress&hl=es").then(() => {
      console.log("shareSheetShare: Success");
    }).catch(() => {
      console.error("shareSheetShare: failed");
    });
  }


}
