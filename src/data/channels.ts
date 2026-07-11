export interface Channel {
  id: string;
  name: string;
  country: string;
  logo?: string;
  url: string;
  category: 'general' | 'sports' | 'movies' | 'news';
}

export const channels: Channel[] = [
  // España
  { id: '1', name: 'TVE La 1', country: 'España', url: 'https://www.rtve.es', category: 'general' },
  { id: '2', name: 'La 2', country: 'España', url: 'https://www.rtve.es', category: 'general' },
  { id: '3', name: 'Antena 3', country: 'España', url: 'https://www.antena3.com', category: 'general' },
  { id: '4', name: 'Cuatro', country: 'España', url: 'https://www.cuatro.com', category: 'general' },
  { id: '5', name: 'Telecinco', country: 'España', url: 'https://www.telecinco.es', category: 'general' },
  { id: '6', name: 'La Sexta', country: 'España', url: 'https://www.lasexta.com', category: 'general' },
  { id: '7', name: 'ESPN', country: 'España', url: 'https://www.espn.es', category: 'sports' },
  { id: '8', name: 'Movistar+', country: 'España', url: 'https://www.movistarplus.es', category: 'movies' },

  // Francia
  { id: '9', name: 'France Télévisions', country: 'Francia', url: 'https://www.france.tv', category: 'general' },
  { id: '10', name: 'TF1', country: 'Francia', url: 'https://www.tf1.fr', category: 'general' },
  { id: '11', name: 'France 2', country: 'Francia', url: 'https://www.france2.fr', category: 'general' },
  { id: '12', name: 'Eurosport', country: 'Francia', url: 'https://www.eurosport.fr', category: 'sports' },

  // Italia
  { id: '13', name: 'RAI 1', country: 'Italia', url: 'https://www.rai.it', category: 'general' },
  { id: '14', name: 'RAI 2', country: 'Italia', url: 'https://www.rai.it', category: 'general' },
  { id: '15', name: 'Mediaset Premium', country: 'Italia', url: 'https://www.mediasetpremium.it', category: 'movies' },
  { id: '16', name: 'Sky Italia', country: 'Italia', url: 'https://www.skyitalia.it', category: 'general' },

  // Alemania
  { id: '17', name: 'ARD', country: 'Alemania', url: 'https://www.ard.de', category: 'general' },
  { id: '18', name: 'ZDF', country: 'Alemania', url: 'https://www.zdf.de', category: 'general' },
  { id: '19', name: 'Deutsche Welle', country: 'Alemania', url: 'https://www.dw.com', category: 'news' },
  { id: '20', name: 'Pro 7', country: 'Alemania', url: 'https://www.pro7.de', category: 'general' },

  // Reino Unido
  { id: '21', name: 'BBC One', country: 'Reino Unido', url: 'https://www.bbc.com', category: 'general' },
  { id: '22', name: 'BBC Two', country: 'Reino Unido', url: 'https://www.bbc.com', category: 'general' },
  { id: '23', name: 'ITV', country: 'Reino Unido', url: 'https://www.itv.com', category: 'general' },
  { id: '24', name: 'Sky Sports', country: 'Reino Unido', url: 'https://www.sky.com', category: 'sports' },

  // Portugal
  { id: '25', name: 'RTP 1', country: 'Portugal', url: 'https://www.rtp.pt', category: 'general' },
  { id: '26', name: 'RTP 2', country: 'Portugal', url: 'https://www.rtp.pt', category: 'general' },
  { id: '27', name: 'SIC', country: 'Portugal', url: 'https://www.sic.pt', category: 'general' },
  { id: '28', name: 'TVI', country: 'Portugal', url: 'https://www.tvi.iol.pt', category: 'general' },

  // Holanda
  { id: '29', name: 'NPO 1', country: 'Holanda', url: 'https://www.npo.nl', category: 'general' },
  { id: '30', name: 'RTL 4', country: 'Holanda', url: 'https://www.rtl4.nl', category: 'general' },
  { id: '31', name: 'Ziggo Sport', country: 'Holanda', url: 'https://www.ziggosport.nl', category: 'sports' },

  // Bélgica
  { id: '32', name: 'VRT One', country: 'Bélgica', url: 'https://www.vrt.be', category: 'general' },
  { id: '33', name: 'Ketnet', country: 'Bélgica', url: 'https://www.ketnet.be', category: 'general' },

  // Suiza
  { id: '34', name: 'SRF 1', country: 'Suiza', url: 'https://www.srf.ch', category: 'general' },
  { id: '35', name: 'RSI', country: 'Suiza', url: 'https://www.rsi.ch', category: 'general' },

  // Suecia
  { id: '36', name: 'SVT 1', country: 'Suecia', url: 'https://www.svt.se', category: 'general' },
  { id: '37', name: 'TV4', country: 'Suecia', url: 'https://www.tv4.se', category: 'general' },

  // Dinamarca
  { id: '38', name: 'DR 1', country: 'Dinamarca', url: 'https://www.dr.dk', category: 'general' },
  { id: '39', name: 'TV 2', country: 'Dinamarca', url: 'https://www.tv2.dk', category: 'general' },

  // Noruega
  { id: '40', name: 'NRK 1', country: 'Noruega', url: 'https://www.nrk.no', category: 'general' },
  { id: '41', name: 'TV 2', country: 'Noruega', url: 'https://www.tv2.no', category: 'general' },

  // Grecia
  { id: '42', name: 'ERT 1', country: 'Grecia', url: 'https://www.ert.gr', category: 'general' },
  { id: '43', name: 'Mega TV', country: 'Grecia', url: 'https://www.megatv.com', category: 'general' },

  // Polonia
  { id: '44', name: 'TVP 1', country: 'Polonia', url: 'https://www.tvp.pl', category: 'general' },
  { id: '45', name: 'TVP 2', country: 'Polonia', url: 'https://www.tvp.pl', category: 'general' },

  // República Checa
  { id: '46', name: 'ČT 1', country: 'República Checa', url: 'https://www.ceskatelevize.cz', category: 'general' },
  { id: '47', name: 'ČT 2', country: 'República Checa', url: 'https://www.ceskatelevize.cz', category: 'general' },

  // Hungría
  { id: '48', name: 'M1', country: 'Hungría', url: 'https://www.mtv.hu', category: 'general' },
  { id: '49', name: 'M2', country: 'Hungría', url: 'https://www.mtv.hu', category: 'general' },

  // Rumania
  { id: '50', name: 'TVR 1', country: 'Rumania', url: 'https://www.tvr.ro', category: 'general' },
  { id: '51', name: 'Antena 1', country: 'Rumania', url: 'https://www.antena1.ro', category: 'general' },

  // Austria
  { id: '52', name: 'ORF 1', country: 'Austria', url: 'https://www.orf.at', category: 'general' },
  { id: '53', name: 'ORF 2', country: 'Austria', url: 'https://www.orf.at', category: 'general' },

  // Turquía
  { id: '54', name: 'TRT 1', country: 'Turquía', url: 'https://www.trt.net.tr', category: 'general' },
  { id: '55', name: 'Kanal D', country: 'Turquía', url: 'https://www.kanald.com.tr', category: 'general' },
];

export const getChannelsByCountry = (country: string): Channel[] => {
  return channels.filter(ch => ch.country === country);
};