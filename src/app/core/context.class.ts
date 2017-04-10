import { JQuery } from './../base/jquery.class';
import { ServiceSale } from './../domain/service-sale.class';
import { ProductSale } from './../domain/product-sale.class';

declare var $: any;
declare var jQuery: any;

export class Context {

    private _productSaleList: ProductSale[];
    private _serviceSaleList: ServiceSale[];
    private _flightSaleList: ServiceSale[];

    constructor() {
        this._productSaleList = [];
        this._serviceSaleList = [];
        this._flightSaleList = [];
        this.bootstrap();
    }

    private bootstrap() {
        const self = this;
        $.ajaxPrefilter(function (options) {
            if (options.crossDomain && jQuery.support.cors) {
                const http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
                options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
            }
        });

        $.get('http://gatry.com', function (response) {
            const content = response.substring(response.indexOf('<div class="lista-promocoes">'), response.indexOf('<a href="#carregar-mais"'));
            new JQuery(content).findAll('article').forEach(it => {
                let instance = new ProductSale();
                instance.id = it.getAttrValue('id');
                instance.name = it.find('.informacoes h3[itemprop="name"]').getText().trim();
                instance.description = instance.name;
                instance.price = parseFloat(it.find('.informacoes .preco span[itemprop="price"]').getText().replace(/\./, '').replace(/,/, '.'));
                instance.storeName = it.find('.informacoes .opcoes a[itemprop="url"]').getText();
                instance.link = it.find('.informacoes .opcoes a[itemprop="url"]').getAttrValue('href');
                instance.image = it.find('.imagem a img').getAttrValue('src');
                instance.timestamp = Date.now();
                self._productSaleList.push(instance);
            });
        });

        $.get('http://www.hotelurbano.com/promocoes', function (response) {
            const content = response.substring(response.indexOf('<div class="template__sections">'), (response.indexOf('<div class="hu_newsletter-bar"') - 6));
            new JQuery(content).findAll('div.offer-card.promotion-sku').forEach(it => {
                let instance = new ServiceSale();
                instance.id = it.getAttrValue('data-promotion-sku');
                instance.name = it.find('.offer-card__titles h3.offer-card__title').getText().trim();
                instance.description = it.find('.offer-card__titles strong.offer-card__subtitle').getText().trim();
                instance.price = parseFloat(it.find('.offer-card__prices .atomic-price strong.atomic-price__big').getText().replace(/\./, '').replace(/,/, '.'));
                instance.storeName = 'Hotel Urbano'
                instance.link = it.find('a.offer-card__link').getAttrValue('href');
                instance.image = it.find('.atomic-image.offer-card__image').getAttrValue('style');
                instance.image = instance.image.substring(22, (instance.image.length - 3));
                instance.timestamp = Date.now();
                self._serviceSaleList.push(instance);
            });
        });

        let counter = 1;
        $.get('http://www.passagenspromo.com.br/home/passagens-aereas', function (response) {
            const content = response.substring((response.indexOf('<div class="row-fluid clearfix mtb20 bg-gray"') - 42), (response.indexOf('<div class="row-fluid divider clearfix hidden-xs">') - 136));
            new JQuery(content).findAll('div.row-fluid.mtb20 div.container.mb20').forEach(comp => {
                let title = comp.find('.titleslugpill h1').getText();
                let company = title.split(':')[0].replace('Passagens aéreas ', '').trim();
                comp.findAll('div.pill-container.mtb20').forEach(it => {
                    let instance = new ServiceSale();
                    instance.id = 'promotion-'+counter;
                    counter++;
                    let locations = it.findAll('div.location');
                    instance.name = 'Flight of '+company+' from ' + locations[0].find('strong').getText() + ' to ' + locations[1].find('strong').getText();
                    instance.description = 'Flight of '+company+': departure ' + locations[0].getText() + '  <>  arrive ' + locations[1].getText();
                    let price = it.find('.placa').getText().replace('Preço:', '').replace('<br>', '').replace('R$', '');
                    instance.price = parseFloat(price.replace(/\./, '').replace(/,/, '.'));
                    instance.storeName = 'Passagens Promo'
                    instance.link = it.find('a').getAttrValue('href');

                    switch(company){
                        case 'TAM':
                            instance.image = 'https://static.wixstatic.com/media/fbc4ec_2da1263cffc74161bac4e74f8a427684~mv2.jpg';
                            break;
                        case 'GOL':
                            instance.image = 'https://www.voegol.com.br/PublishingImages/logos/gol-passagens-aereas.png';
                            break;
                        case 'AZUL':
                            instance.image = 'https://4.bp.blogspot.com/-zrco-Q6EsMY/VsFL0xybagI/AAAAAAAA2Ps/NY6nuWnZe8s/s200/atendimento%2Bazul%2Bsac%2B0800.png';
                            break;
                        case 'AVIANCA':
                            instance.image = 'https://www.avianca.com.br/documents/20143/0/layout_set_logo.png';
                            break;
                    }
                    instance.timestamp = Date.now();
                    self._flightSaleList.push(instance);
                });
            });
        });
    }

    public get productSaleList(): ProductSale[] {
        return this._productSaleList;
    }

    public get serviceSaleList(): ServiceSale[] {
        return this._serviceSaleList;
    }

    public get flightSaleList(): ServiceSale[] {
        return this._flightSaleList;
    }
}
