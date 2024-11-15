import { Component } from '@angular/core';
import { ComputerPart } from '../models/computerpart.model';
import { Parts } from '../models/parts.model';

@Component({
  selector: 'app-part-list',
  templateUrl: './part-list.component.html',
  styleUrl: './part-list.component.css'
})
export class PartListComponent {

  selectedComputerPart: ComputerPart | undefined

  totalMoney: number = 0;

  PartsInCart: Parts[] = []

  

  computerParts: ComputerPart[] = [
      {
        name: "Alaplap",
        imageUrl: "images/motherboard.png",
        parts: [
          {
            name: "ASUS ROG STRIX B550-A GAMING",
            price: 53990,
            description: "A remek ASUS alaplap AMD B550 chipsetre épül és a processzor csatlakoztatására AMD AM4 foglalattal látták el. Hagyományosan része egy hangkártya is, ami 8 csatornát képes működtetni. A modell behelyezéséhez ATX kategóriájú házat szükséges választani. A méretesebb alaplapok közé sorolják, ideális a nagyobb teljesítményű gamer PC-khez, amelyek jelentős számú kártyával és erős hűtővel vannak ellátva.",
            properties: [
              { key: "Foglalat", value: "AMD AM4"},
              { key: "Lapkakészlet", value: "AMD B550"},
              { key: "Memória típusa", value: "DDR4"},
              { key: "Alaplap formátum", value: "ATX"},
              { key: "Kompatibilis processzor generáció", value: "Ryzen 5. generáció, Ryzen 4. generáció, Ryzen 3. generáció"},
            ],
            quantity: 0
          },
          {
            name: "GIGABYTE X670E AORUS MASTER",
            price: 171390,
            description: "A remek GIGABYTE alaplap AMD X670E lapkakészletre épül és a CPU csatlakoztatására AMD AM5 foglalatot kapott. Szabvány szerinti része egy hangkártya is, ami 8 csatornát képes kezelni. A lap beszereléséhez eATX (Extended ATX) kategóriájú házat szükséges beszerezni. A nagyobb méretű alaplapok közé sorolják, ideális rendkívül erős összeállításokhoz, amelyek erős hűtővel és sok kártyával vannak felszerelve.",
            properties: [
              { key: "Foglalat", value: "AMD AM5"},
              { key: "Lapkakészlet", value: "AMD X670"},
              { key: "Memória típusa", value: "DDR5"},
              { key: "Alaplap formátum", value: "eATX (Extended ATX)"},
              { key: "Kompatibilis processzor generáció", value: "Ryzen 7. generáció, Ryzen 9. generáció, Ryzen 8. generáció"}
            ],
            quantity: 0
          },
          {
            name: "ASUS TUF GAMING X670E-PLUS",
            price: 119790,
            description: "A nagyszerű ASUS PC alaplap AMD X670E chipsetre épül és a CPU fogadására AMD AM5 foglalat szolgál. Szabvány szerinti része egy hangkártya is, ami 8 csatornát képes kezelni. Az alaplap beszereléséhez ATX formátumú számítógépházat indokolt választani. A méretesebb alaplapok közé tartozik, ideális a nagyobb teljesítményű számítógép-összeállításokhoz, amelyek jelentős számú kártyával vannak felszerelve.",
            properties: [
              { key: "Foglalat", value: "AMD AM5"},
              { key: "Lapkakészlet", value: "AMD X670E"},
              { key: "Memória típusa", value: "DDR5"},
              { key: "Alaplap formátum", value: "ATX"},
              { key: "Kompatibilis processzor generáció", value: "Ryzen 7. generáció, Ryzen 9. generáció, Ryzen 8. generáció"}
            ],
            quantity: 0
          },
          {
            name: "MSI MAG X670E TOMAHAWK WIFI",
            price: 123290,
            description: "A remek MSI számítógép alaplap AMD X670E lapkakészletre épül és a processzor csatlakoztatására AMD AM5 foglalatot kapott. Hagyományosan része egy hangkártya is, ami 8 csatorna vezérlésére képes. Hálózati modul is rendelkezésre áll, egyszerű Wi-Fi-n át történő csatlakozási opcióval. A lap beépítéséhez ATX formátumú számítógépházat kell választani. A méretesebb lapok közé sorolják, ideális a nagyobb teljesítményű számítógép-összeállításokhoz, amelyek jelentős számú kártyával vannak felszerelve.",
            properties: [
              { key: "Foglalat", value: "AMD AM5"},
              { key: "Lapkakészlet", value: "AMD X670E"},
              { key: "Memória típusa", value: "DDR5"},
              { key: "Alaplap formátum", value: "ATX"},
              { key: "Kompatibilis processzor generáció", value: "Ryzen 7. generáció, Ryzen 9. generáció, Ryzen 8. generáció"}
            ],
            quantity: 0
          },
          {
            name: "MSI MAG B650 TOMAHAWK WIFI",
            price: 83690,
            description: "A minőségi MSI számítógép alaplap AMD B650 chipkészletre épül és a CPU csatlakoztatására AMD AM5 foglalatot kapott. Hagyományosan része egy hangkártya is, ami 8 csatorna működtetésére képes. Hálózati csatlakozási modul is elérhető, jól kihasználható Wi-Fi-n át történő csatlakozási lehetőséggel. A modell beépítéséhez ATX kategóriájú PC házat szükséges beszerezni. A nagyobb méretű alaplapok közé tartozik, ideális a nagyobb teljesítményű gamer PC-khez, amelyek számtalan kártyával vannak felszerelve.",
            properties: [
              { key: "Foglalat", value: "AMD AM5"},
              { key: "Lapkakészlet", value: "AMD B650"},
              { key: "Memória típusa", value: "DDR5"},
              { key: "Alaplap formátum", value: "ATX"},
              { key: "Kompatibilis processzor generáció", value: "Ryzen 7. generáció, Ryzen 9. generáció, Ryzen 8. generáció"}
            ],
            quantity: 0
          }
        ]
      },
      {
        name: "Processzor",
        imageUrl: "images/cpu.png",
        parts: [
          {
            name: "AMD Ryzen 9 9950X",
            price: 291790,
            description: "Az AMD Ryzen 9000 sorozatú processzorok nyers erejével és teljesítményével minden akadályt legyőz a győzelem felé vezető úton. A Zen 5 alaptechnológiánk a saját igényeid szerint fejlődik, így ma és holnap is sikereket érhetsz el. A 16 maggal és 32 szálal rendelkező, jól bevált és nagy teljesítményű platform korlátlanná teszi a játéklehetőségeidet. ",
            properties: [
              { key: "Foglalat", value: "AMD AM5"},
              { key: "Mikroarchitektúra", value: "Zen 5"},
              { key: "Processzormagok száma", value: "16"},
              { key: "Processzor frekvencia", value: "4,3 GHz"},
              { key: "Támogatott memóriatípus", value: "DDR5"},
              { key: "TDP fogyasztás", value: "170 W"}
            ],
            quantity: 0
          },
          {
            name: "AMD Ryzen 7 9700X",
            price: 163190,
            description: "Az AMD Ryzen 9000 sorozatú processzorok nyers erejével és teljesítményével minden akadályt legyőz a győzelem felé vezető úton. A Zen 5 alaptechnológiánk a saját igényeid szerint fejlődik, így ma és holnap is sikereket érhetsz el. A 8 maggal és 16 szálal rendelkező, jól bevált és nagy teljesítményű platform korlátlanná teszi a játéklehetőségeidet.",
            properties: [
              { key: "Foglalat", value: "AMD AM5"},
              { key: "Mikroarchitektúra", value: "Zen 5"},
              { key: "Processzormagok száma", value: "8"},
              { key: "Processzor frekvencia", value: "3,8 GHz"},
              { key: "Támogatott memóriatípus", value: "DDR5"},
              { key: "TDP fogyasztás", value: "65 W"}
            ],
            quantity: 0
          },
          {
            name: "AMD Ryzen 5 9600X",
            price: 126490,
            description: "Az AMD Ryzen 9000 sorozatú processzorok nyers erejével és teljesítményével minden akadályt legyőz a győzelem felé vezető úton. A Zen 5 alaptechnológiánk a saját igényeid szerint fejlődik, így ma és holnap is sikereket érhetsz el. A 6 maggal és 12 szálal rendelkező, jól bevált és nagy teljesítményű platform korlátlanná teszi a játéklehetőségeidet.",
            properties: [
              { key: "Foglalat", value: "AMD AM5"},
              { key: "Mikroarchitektúra", value: "Zen 5"},
              { key: "Processzormagok száma", value: "6"},
              { key: "Processzor frekvencia", value: "3,9 GHz"},
              { key: "Támogatott memóriatípus", value: "DDR5"},
              { key: "TDP fogyasztás", value: "65 W"}
            ],
            quantity: 0
          }
        ]
      },
      {
        name: "Memória",
        imageUrl: "images/memory.png",
        parts: [
          {
            name: "Corsair 32GB KIT DDR5 6000MHz CL30 Vengeance Grey EXPO",
            price: 53790,
            description: "A jól ismert Corsair kifejlesztett egy új DIMM típusú memóriaegységet, amelyet elsősorban gamer PC-khez terveztek. Ez a meglévő Corsair 32GB KIT DDR5 6000MHz CL30 Vengeance Grey EXPO DDR5 típusú csatlakozóba passzol. A készlet együttesen 2 db memóriamodulból áll, amelyek együttes kapacitása 32 GB. A passzív hűtés megfelelő szinten tartja a RAM üzemi hőmérsékletét. Eme Corsair RAM memória időzítése CL 30-36-36-76 és funkcionálási frekvenciája 6000 MHz.",
            properties: [
              { key: "Memória típusa", value: "DDR5"},
              { key: "RAM memória mérete", value: "32 GB"},
              { key: "Modulok száma", value: "2 db"},
              { key: "Frekvencia", value: "6000 MHz"}
            ],
            quantity: 0
          },
          {
            name: "Corsair 64GB KIT DDR5 6000MHz CL30 Vengeance RGB Grey EXPO",
            price: 100590,
            description: "A nagy hírű Corsair kifejlesztett egy teljesen új DIMM típusú memóriaegységet, melyet kifejezetten nagy teljesítményű gaming számítógépekhez gyártottak. Ez a konkrét Corsair 64GB KIT DDR5 6000MHz CL30 Vengeance RGB Grey EXPO DDR5 típusú csatlakozóba passzol. A szett összességében 2 db memóriaegységből áll, melyek összesített kapacitása 64 GB. A passzív hűtő megfelelő szinten tartja a RAM memória működési hőmérsékletét. Eme Corsair memória időzítése CL 30-36-36-76 és funkcionálási frekvenciája 6000 MHz. A kiváló teljesítmény mellett háttérvilágítással is bír.",
            properties: [
              { key: "Memória típusa", value: "DDR5"},
              { key: "RAM memória mérete", value: "64 GB"},
              { key: "Modulok száma", value: "2 db"},
              { key: "Frekvencia", value: "6000 MHz"}
            ],
            quantity: 0
          },
          {
            name: "Kingston FURY 32GB KIT DDR5 6000MHz CL36 Beast Black EXPO",
            price: 44490,
            description: "Az ismert Kingston bemutatta az új DIMM típusú memóriaegységet, melyet elsősorban erős gaming PC-khez alkottak meg. Ez az adott Kingston FURY 32GB KIT DDR5 6000MHz CL36 Beast Black EXPO DDR5 típusú foglalatba passzol. A szett összességében 2 db modulból áll, melyek kapacitása együtt 32 GB.",
            properties: [
              { key: "Memória típusa", value: "DDR5"},
              { key: "RAM memória mérete", value: "32 GB"},
              { key: "Modulok száma", value: "2 db"},
              { key: "Frekvencia", value: "6 000 MHz"}
            ],
            quantity: 0
          },
          {
            name: "G.SKILL 64GB KIT DDR5 6000MT/s CL30 Flare X5",
            price: 89990,
            description: "A jól ismert G.SKILL kifejlesztett egy új DIMM típusú memóriaegységet, amelyet elsődlegesen nagy teljesítményű gamer számítógépekhez alkottak meg. Ez az adott G.SKILL 64GB KIT DDR5 6000MT/s CL30 Flare X5 DDR5 típusú foglalatba illik. A készlet együttesen 2 db memóriaegységből áll, melyek összeadott kapacitása 64 GB. A passzív hűtés megfelelő szinten tartja a RAM funkcionálási hőmérsékletét. Eme G.SKILL rendszermemória időzítése CL 30-40-40-96 és működési frekvenciája 6000 MHz.",
            properties: [
              { key: "Memória típusa", value: "DDR5"},
              { key: "RAM memória mérete", value: "64 GB"},
              { key: "Modulok száma", value: "2 db"},
              { key: "Frekvencia", value: "6000 MHz"}
            ],
            quantity: 0
          },
          {
            name: "Patriot Viper Venom 64GB KIT DDR5 6000MHz CL30",
            price: 83890,
            description: "A nevezetes Patriot piacra dobott egy teljesen új DIMM áramkörrel ellátott memóriát, amelyet elsődlegesen nagy teljesítményű gamer PC-khez terveztek. Ez az adott Patriot Viper Venom 64GB KIT DDR5 6000MHz CL30 DDR5 típusú interfészbe illik. A szett együttesen 2 db modulból áll, melyek összeadott kapacitása 64 GB. A passzív hűtő megfelelő szinten tartja a memória működési hőmérsékletét. Ezen Patriot memória időzítése CL 30-40-40-76 és funkcionálási frekvenciája 6000 MHz. A kitűnő teljesítmény mellett háttérvilágítással is rendelkezik.",
            properties: [
              { key: "Memória típusa", value: "DDR5"},
              { key: "RAM memória mérete", value: "64 GB"},
              { key: "Modulok száma", value: "2 db"},
              { key: "Frekvencia", value: "6000 MHz"}
            ],
            quantity: 0
          },
          {
            name: "Kingston FURY 16GB DDR5 5200MHz CL40 Beast Black",
            price: 21290,
            description: "Ahhoz, hogy egy számítógép hatékonyan tudjon működni, gyorsan hozzá kell férnie az általa feldolgozott adatokhoz. Legyen szó akár több alkalmazással való egyidejű munkáról vagy játékról. Ez az oka annak, hogy számítógépedet elegendő operatív memóriakapacitással kell felszerelned. Ehhez tesz jó szolgálatot a Kingston FURY 16GB DDR5 5200MHz CL40 Beast Black fergeteges fekete kivitelben, amelyet tovább fokoz a használt passzív hűtőborda. DDR5 memóriamodulok alkalmasak a modern típusú számítógépekhez, és javasoljuk, hogy vásárlás előtt ellenőrizd, milyen típusú RAM-ot használsz.",
            properties: [
              { key: "Memória típusa", value: "DDR5"},
              { key: "RAM memória mérete", value: "16 GB"},
              { key: "Modulok száma", value: "1 db"},
              { key: "Frekvencia", value: "5 200 MHz"}
            ],
            quantity: 0
          }
        ]
      },
      {
        name: "Videókártya",
        imageUrl: "images/video-card.png",
        parts: [
          {
            name: "ASUS DUAL GeForce RTX 4060 O8G EVO",
            price: 124490,
            description: "Profi grafikus kártyát szeretnél vásárolni, mely CAD programokhoz és videók vágásához is alkalmas? Akkor felkeltheti figyelmedet a keresett, 8 GB-os ASUS grafikus kártya. 128 Bites adatsín szélessége és 2535 MHz-es alapórajele igényes 3D grafikai feladatok elvégzésénél garantál kitűnő teljesítményt. Az alaplaphoz PCI Express x16 4.0 porton keresztül csatlakozik és 4 kimenet szolgál a monitor csatlakoztatására. Név szerint a köv. konnektorról van szó: DisplayPort 1.4a és HDMI 2.1a. Aktív hűtőrendszere nagy teljesítménynél is alacsony üzemi hőmérsékletet szavatol.",
            properties: [
              { key: "Chip gyártója", value: "NVIDIA GeForce"},
              { key: "Modell", value: "RTX 4060"},
              { key: "RAM memória mérete", value: "8 GB"},
              { key: "Memória típusa", value: "GDDR6"},
              { key: "Alaplapi csatlakozás", value: "PCI Express x16 4.0"}
            ],
            quantity: 0
          },
          {
            name: "GIGABYTE GeForce RTX 3060 GAMING OC 12G",
            price: 128890,
            description: "Nagy teljesítményű gamer grafikus kártyát szeretnél venni, amely a legújabb számítógépes játékok futtatásával is megbirkózik? Akkor felkeltheti érdeklődésedet a kelendő, 12 GB-os és 15000 MHz-es GIGABYTE grafikus kártya. 192 Bites adatsín szélessége és 1320 MHz-es alapórajele komoly rendszerigényű játékoknál is kiváló teljesítményt nyújt. Az alaplaphoz PCI Express x16 4.0 porton keresztül kapcsolódik és 4 kimenet szolgál a képernyő bekötésére. Név szerint a következő csatlakozóról van szó: DisplayPort 1.4a és HDMI 2.1. Aktív hűtőrendszere nagyobb teljesítménynél is alacsony üzemi hőfokot szavatol.",
            properties: [
              { key: "Chip gyártója", value: "NVIDIA GeForce"},
              { key: "Modell", value: "RTX 3060"},
              { key: "RAM memória mérete", value: "12 GB"},
              { key: "Memória típusa", value: "GDDR6"},
              { key: "Alaplapi csatlakozás", value: "PCI Express x16 4.0"}
            ],
            quantity: 0
          },
          {
            name: "ASUS ProArt GeForce RTX 4080 SUPER O16G",
            price: 518990,
            description: "Nagy teljesítményű gamer videókártyát akarnál vásárolni, mely a legfrissebb számítógépes játékok futtatásával is megbirkózik? Akkor felkeltheti figyelmedet a kelendő, 16 GB-os és 23000 MHz-es ASUS videókártya. 256 Bites adatbusz szélessége és 2205 MHz-es alapórajele legújabb PC játékoknál is jó teljesítményt garantál. Az alaplaphoz PCI Express x16 4.0 interfészen keresztül kapcsolódik és 4 kimenet szolgál a kijelző csatlakoztatására. Konkrétan a köv. konnektorról van szó: DisplayPort 1.4a és HDMI 2.1a. Aktív hűtése nagyobb terhelésnél is alacsony funkcionálási hőmérsékletet biztosít.",
            properties: [
              { key: "Chip gyártója", value: "NVIDIA GeForce"},
              { key: "Modell", value: "RTX 4080 SUPER"},
              { key: "RAM memória mérete", value: "16 GB"},
              { key: "Memória típusa", value: "GDDR6X"},
              { key: "Alaplapi csatlakozás", value: "PCI Express x16 4.0"}
            ],
            quantity: 0
          },
          {
            name: "GIGABYTE GeForce RTX 4060 WINDFORCE OC 8G",
            price: 124190,
            description: "Nagy teljesítményű gaming videókártyát akarnál venni, amely a legmodernebb számítógépes játékok futtatásával is megbirkózik? Akkor felkeltheti érdeklődésedet a népszerű, 8 GB-os és 17000 MHz-es GIGABYTE videókártya. 128 Bites adatsín szélessége és 1830 MHz-es alapórajele nagy rendszerigényű PC játékoknál is jó teljesítményt nyújt. Az asztali számítógép alaplapjához PCI Express x16 4.0 interfészen keresztül kapcsolódik és 4 kimenet szolgál a monitor bekötésére. Konkrétan a következő konnektorról van szó: DisplayPort 1.4 és HDMI 2.1. Aktív hűtőrendszere nagy teljesítménynél is alacsony működési hőfokot szavatol.",
            properties: [
              { key: "Chip gyártója", value: "NVIDIA GeForce"},
              { key: "Modell", value: "RTX 4060"},
              { key: "RAM memória mérete", value: "8 GB"},
              { key: "Memória típusa", value: "GDDR6"},
              { key: "Alaplapi csatlakozás", value: "PCI Express x16 4.0"}
            ],
            quantity: 0
          },
          {
            name: "ASUS DUAL GeForce RTX 4060 Ti O8G EVO",
            price: 168890,
            description: "Új grafikus kártyát készülsz beszerezni, amely a legfrissebb számítógépes játékok futtatásával is megbirkózik? Akkor felkeltheti érdeklődésedet a keresett, 8 GB-os és 18000 MHz-es ASUS videókártya. 128 Bites adatbusz szélessége és 2310 MHz-es alapórajele komoly rendszerigényű PC játékoknál is kiváló teljesítményt garantál. Az asztali számítógép alaplapjához PCI Express x16 4.0 porton keresztül csatlakozik és 4 kimenet szolgál a monitor bekötésére. Konkrétan a köv. portról van szó: DisplayPort 1.4a és HDMI 2.1a. Aktív hűtése nagyobb terhelésnél is alacsony funkcionálási hőfokot szavatol.",
            properties: [
              { key: "Chip gyártója", value: "NVIDIA GeForce"},
              { key: "Modell", value: "RTX 4060 Ti"},
              { key: "RAM memória mérete", value: "8 GB"},
              { key: "Memória típusa", value: "GDDR6"},
              { key: "Alaplapi csatlakozás", value: "PCI Express x16 4.0"}
            ],
            quantity: 0
          }
        ]
      },
      {
        name: "Számítógépház",
        imageUrl: "images/pc-case.png",
        parts: [
          {
            name: "Montech DX Black",
            price: 24990,
            description: "Az elsőrangú Midi Tower formátumú Montech DX Black számítógépház stílusos dizájnt kínál, amelyet fekete szín határoz meg. Ezt acélból készült szerkezeten alkalmazták. A midi torony szerkezetű formátumot közepes és nagy teljesítményű számítógépek összerakására találták ki, amelyek háza nem ér el feleslegesen nagy méreteket. Annak ellenére is, hogy egy kisebb változatú számítógépházról beszélünk, nagy mennyiségű gamer vagy professzionális elemet fogad be. Sokakat ámulatba ejt a kedvezőtlen hőmérséklet megfelelő elvezetése nagyobb hűtők és ventilátorok által, amelyeket elég hely vár a házban. A számítógép fő vezérlőpanele, amely lehetőséget nyújt a perifériák irányítására és csatlakoztatására, a ház első részén helyezkedik el. A minőségi Montech DX Black házba ATX, mATX (Micro ATX) és mITX (Mini ITX) méretű alaplapot lehet telepíteni. A ház háttérvilágítása az RGB színekben játszik.",
            properties: [
              { key: "Méret", value: "Midi Tower"},
              { key: "Alaplap formátum", value: "ATX, mATX (Micro ATX), mITX (Mini ITX)"},
              { key: "Szélesség", value: "230 mm"},
              { key: "Magasság", value: "450 mm"},
              { key: "Mélység", value: "435 mm"}
            ],
            quantity: 0
          },
          {
            name: "GameMax Defender Mesh Black",
            price: 16690,
            description: "Az elsőrangú Midi Tower típusú GameMax Defender Mesh Black számítógépház stílusos kidolgozást biztosít, amelyet fekete szín dominál. Ezt acél szerkezeten használták fel. A midi torony típusú PC házat jól felszerelt gamer számítógépek megépítésére tervezték oda, ahová nem fér be egy nagy torony. Annak ellenére, hogy egy kisebb változatú számítógép gépházról beszélünk, megfelelő mennyiségű gamer vagy professzionális komponenst fogad be. Az igényes felhasználóknak tetszeni fog a felesleges forró levegő megfelelő elvezetése nagy hűtők és ventilátorok által, amelyekre elég hely van a házban. A számítógép fő vezérlőpanele, amely biztosítja a perifériák irányítását és csatlakoztatását, a ház felső részén található. A remek GameMax Defender Mesh Black házba mATX (Micro ATX) és mITX (Mini ITX) típusú alaplapot vagy képes telepíteni. A számítógép ház előlapja perforációval rendelkezik, ami stílusos megjelenést ad neki és lehetővé teszi a levegő jobb keringését. A ventilátorokat könnyen szabályozni lehet, ezért könnyen be lehet állítani a fordulatszámukat. A ház háttérvilágítása az alap RGB színekben játszik.",
            properties: [
              { key: "Méret", value: "Midi Tower"},
              { key: "Alaplap formátum", value: "mATX (Micro ATX), mITX (Mini ITX)"},
              { key: "Szélesség", value: "210 mm"},
              { key: "Magasság", value: "450 mm"},
              { key: "Mélység", value: "461 mm"}
            ],
            quantity: 0
          },
          {
            name: "BitFenix Helios (4F)",
            price: 18290,
            description: "A remek Midi Tower méretű BitFenix Helios (4F) számítógépház stílusos kidolgozást nyújt, amelyet fekete szín dominál. Ezt acélból készült szerkezeten használták fel. A midi torony nagyságú modellt jól felszerelt gamer számítógépek megépítésére alkották meg oda, ahová nem fér be egy nagy torony. Habár egy kisebb változatú PC gépházról van szó, sok gamer vagy professzionális elemet fogad be. Az igényes felhasználóknak örömet szerez a felesleges forró levegő megfelelő elvezetése terebélyes hűtők és ventilátorok segítségével, amelyek gond nélkül elférnek a házban. Az asztali számítógép fő vezérlőpanele, amely lehetővé teszi a perifériák irányítását és csatlakoztatását, a ház felső részén helyezkedik el. A kitűnő BitFenix Helios (4F) házba ATX, mATX (Micro ATX) és mITX (Mini ITX) méretű alaplapot lehet betenni. A ház háttérvilágítása az RGB színekben játszik.",
            properties: [
              { key: "Méret", value: "Midi Tower"},
              { key: "Alaplap formátum", value: "ATX, mATX (Micro ATX), mITX (Mini ITX)"},
              { key: "Szélesség", value: "410 mm"},
              { key: "Magasság", value: "440 mm"},
              { key: "Mélység", value: "210 mm"}
            ],
            quantity: 0
          },
          {
            name: "Cooler Master HAF 700 EVO",
            price: 146690,
            description: "A minőségi Midi Tower nagyságú Cooler Master HAF 700 EVO PC ház vonzó kidolgozást biztosít, amelyet fekete szín jellemez. Ezt acél szerkezeten használták fel. A midi torony szerkezetű formátumot közepes és nagy teljesítményű PC konfigurációk megépítésére gyártották oda, ahová nem fér be egy nagy torony. Annak ellenére, hogy egy kisebb változatú számítógépházról beszélünk, elég gamer vagy professzionális alkatrészt fogad be. Az igényes felhasználókat elkápráztatja a hő megbízható elvezetése közepes és nagy hűtők és ventilátorok által, amelyeknek elég helyük van a házban. A számítógép alap vezérlőpanele, amely biztosítja a perifériák irányítását és csatlakoztatását, a ház elején helyezkedik el. A kitűnő Cooler Master HAF 700 EVO házba ATX, mATX (Micro ATX), mITX (Mini ITX), eATX (Extended ATX), CEB és EEB fajtájú alaplapot lehet beszerelni. A ház háttérvilágítása az alap RGB színekben játszik.",
            properties: [
              { key: "Méret", value: "Midi Tower"},
              { key: "Alaplap formátum", value: "ATX, mATX (Micro ATX), mITX (Mini ITX), eATX (Extended ATX), CEB, EEB"},
              { key: "Szélesség", value: "279 mm"},
              { key: "Magasság", value: "540 mm"},
              { key: "Mélység", value: "556 mm"}
            ],
            quantity: 0
          },
          {
            name: "Corsair 3000D AIRFLOW Black",
            price: 31590,
            description: "A nagyszerű Midi Tower formátumú Corsair 3000D AIRFLOW Black számítógépház vonzó dizájnt biztosít, amelyet fekete szín határoz meg. Ezt acélból készült szerkezeten vették igénybe. A midi torony formátumú modellt jól felszerelt gamer számítógépek megépítésére találták ki olyan helyekre, ahová nem fér be egy nagy torony. Annak ellenére is, hogy egy kisebb változatú számítógép gépházról beszélünk, elégséges mennyiségű gamer vagy professzionális komponenst fogad be. Nagy előny a meleg levegő megbízható elvezetése közepes és nagy hűtők és ventilátorok által, amelyekre elég hely van a házban. A számítógép fő vezérlőpanele, amely lehetőséget nyújt a perifériák irányítására és csatlakoztatására, a ház felső részén helyezkedik el. A minőségi Corsair 3000D AIRFLOW Black házba ATX, mATX (Micro ATX) és mITX (Mini ITX) méretű alaplapot lehet beszorítani.",
            properties: [
              { key: "Méret", value: "Midi Tower"},
              { key: "Alaplap formátum", value: "ATX, mATX (Micro ATX), mITX (Mini ITX)"},
              { key: "Szélesség", value: "230 mm"},
              { key: "Magasság", value: "466 mm"},
              { key: "Mélység", value: "462 mm"}
            ],
            quantity: 0
          }
        ]
      },
      {
        name: "Processzor hűtő",
        imageUrl: "images/cooler.png",
        parts: [
          {
            name: "ARCTIC Liquid Freezer III 240 Black",
            price: 27590,
            description: "A(z) ARCTIC Liquid Freezer III 240 Black nélkülözhetetlen része minden gamer számítógépnek. Segíti redukálni a processzor veszélyesen magas hőmérsékletét és javítja a levegőáramlást a PC házban. A vízhűtés különleges szerkezete egyedülálló megjelenést kínál a PC-nek. A tartós csövekben speciálisan kifejlesztett folyadék áramlik, amelynek hűtéséről a terjedelmes radiátor gondoskodik. A(z) ARCTIC Liquid Freezer III 240 Black teljes mértékben helyettesíti a hangos és hatástalan hűtést. A vízhűtéses rendszerek legújabb változatainál fordulatszám-szabályozás is lehetséges. A(z) ARCTIC által kifejlesztett vizesblokk AMD ( AM4 és AM5 ) és Intel ( 1700 ) foglalatokhoz szerelhető.",
            properties: [
              { key: "Hűtő típusa", value: "Vízhűtés"},
              { key: "Telepített ventilátorok száma", value: "2x120mm"},
              { key: "Légáramlás", value: "82,95 m3/h"},
              { key: "Üzemi feszültség", value: "12 V"},
              { key: "Világítás színe", value: "Megvilágítás nélkül"}
            ],
            quantity: 0
          },
          {
            name: "NZXT KRAKEN 280",
            price: 60590,
            description: "A(z) NZXT KRAKEN 280 nélkülözhetetlen része minden gamer PC-nek. Segíti kordában tartani a processzor veszélyesen magas hőmérsékletét és korrigálja a légáramlást a számítógépházban. A vízhűtéses rendszer speciális alakja kivételes megjelenést kölcsönöz a számítógépnek. A tartós csövekben különleges folyadék áramlik, amelynek hűtéséről a nagy radiátor gondoskodik. A(z) NZXT KRAKEN 280 teljes mértékben felváltja a hangos és kevésbé eredményes hűtési rendszert. A vizesblokkok legújabb típusainál fordulatszám-szabályozás is lehetséges. A(z) NZXT által kifejlesztett vizesblokk szett AMD ( AM4, TR4, TRX4 és AM5 ) és Intel ( 1150, 1151, 1155, 1156, 1200 és 1700 ) foglalatokhoz szerelhető.",
            properties: [
              { key: "Hűtő típusa", value: "Vízhűtés"},
              { key: "Telepített ventilátorok száma", value: "2x140mm"},
              { key: "Légáramlás", value: "169,36 m3/h"},
              { key: "Üzemi feszültség", value: "12 V"},
              { key: "Világítás színe", value: "Megvilágítás nélkül"}
            ],
            quantity: 0
          },
          {
            name: "Endorfy Spartan 5 ARGB",
            price: 5690,
            description: "Egy erős processzor hűtő elemi része minden asztali számítógépnek. A(z) Endorfy Spartan 5 ARGB effektív léghűtést garantál. A masszív hűtőtest és a fáradhatatlan ventilátor szélsebesen vezeti el a hőt, optimális hőmérsékleten tartva a chipet. A(z) Endorfy CPU hűtő ventilátorának maximális fordulatszáma 1500 RPM. A fordulatszámot egy automatikus rendszer szabályozza. A(z) Endorfy Spartan 5 ARGB a soron következő Intel aljzat típusokkal: 1150, 1151, 1155, 1156, 1200 és 1700, valamint a következő AMD foglalatokkal: AM2, AM3, AM3+, AM4, FM1, FM2, FM2+ és AM5 kompatibilis. Méretei: 125 × 146 × 65 mm.",
            properties: [
              { key: "Hűtő típusa", value: "Ventilátor"},
              { key: "Telepített ventilátorok száma", value: "1x120 mm"},
              { key: "Világítás színe", value: "RGB"},
              { key: "RGB vezérlés", value: "ASUS Aura Sync, Gigabyte RGB Fusion, MSI Mystic Light"}
            ],
            quantity: 0
          },
          {
            name: "Cooler Master X álom i117",
            price: 4190,
            description: "A CoolerMaster X Dream i117 egy professzionális processzor hűtő, amelynek vastagsága mindössze 60,4 milliméter. Halk működése (19 dB) mellett képes tartósan nagy teljesítményt nyújtani. Ez a típus az Intel 1200/775/1150/1151/1155/1156 foglalatokhoz készült. A hűtő egy 95 x 20 milliméteres ventilátorral is rendelkezik, amely kategóriájának az egyik legkedvezőbb árú képviselője. A ventilátor percenként 1800 fordulatra képes 36,5 CFM légáram mellett. Így a légnyomás 1,55 milliméter H2O lesz. Különleges kialakításának köszönhetően kiváló védelmet biztosít a processzor számára. Sőt, a felszerelése is nagyon egyszerű. A kiváló alkatrészek és a kivitelezés akár 40.000 órányi működést is képes biztosítani. Szabványos alaplapok standard hárompólusú csatlakozójával és Ivy Bridge processzorokkal is kompatibilis.",
            properties: [
              { key: "Hűtő típusa", value: "Ventilátor"},
              { key: "Telepített ventilátorok száma", value: "1x95mm"},
              { key: "Légáramlás", value: "62,01 m3/h"},
              { key: "Üzemi feszültség", value: "12 V"},
              { key: "Világítás színe", value: "Megvilágítás nélkül"}
            ],
            quantity: 0
          },
          {
            name: "GIGABYTE AORUS WATERFORCE II 360 ICE",
            price: 55890,
            description: "A(z) GIGABYTE AORUS WATERFORCE II 360 ICE elengedhetetlen része minden profi számítógépnek. Segíti mérsékelni a processzor (CPU) extrém hőmérsékletét, illetve korrigálja a levegőáramlást a pc-összeállításban. A vizesblokk különleges szerkezete szokatlan megjelenést ad a gépednek. Az erős csövekben speciális folyadék áramlik, amelynek hűtéséről a masszív radiátor gondoskodik. A(z) GIGABYTE AORUS WATERFORCE II 360 ICE teljes mértékben helyettesíti a régi és kevésbé hatékony hűtést.",
            properties: [
              { key: "Hűtő típusa", value: "Vízhűtés"},
              { key: "Telepített ventilátorok száma", value: "3x120mm"},
              { key: "Légáramlás", value: "122,5 m3/h"},
              { key: "Üzemi feszültség", value: "12 V"},
              { key: "Világítás színe", value: "RGB"}
            ],
            quantity: 0
          }
        ]
      },
      {
        name: "Billenytűzet és egér",
        imageUrl: "images/keyboard-and-mouse.png",
        parts: [
          {
            name: "Logitech Wireless Combo MK235 Magyar, fekete",
            price: 11990,
            description: "A Logitech csúcsminőségű vezeték nélküli billentyűzete és egere megbízható partnereid lesznek a számítógép mellett töltött időben. A billentyűzet nagyon kényelmes a finoman lekerekített billentyűknek és a csuklótámasznak köszönhetően. A kezedet kényelmesen tudod tartani, és az izmok nem fáradnak el olyan gyorsan. Az egérnél hasonlóképpen, a profilozott közepének köszönhetően nagyon jól és határozottan tartható. Az elemek hosszú ideig kitartanak, a billentyűzeté akár három évig, az egéré akár egy évig használható. Az MK235 készlet kellemes szürke színű.",
            properties: [
              { key: "Csatlakozási mód", value: "Vezeték nélküli"},
              { key: "Billentyűzet típusa", value: "Irodai"},
              { key: "Szín", value: "Fekete"},
              { key: "Egér érzékenység", value: "1000 DPI"},
              { key: "Egér technológia", value: "Optikai"}
            ],
            quantity: 0
          },
          {
            name: "Dell Premier KM7321W - HU",
            price: 37990,
            description: "A billentyűzet és az egér a PC elengedhetetlen kiegészítője. A(z) Dell Premier KM7321W - HU értelemszerűen mindkét komponenst magában foglalja. Az optikai egér az érzékeléshez piros LED fényt használ. A technológia legnagyobb előnye, hogy viszonylag alacsony áron elérhető. Ezt a remek billentyűzetet leginkább normál irodai használatra tervezték. A(z) Dell által tervezett egér és billentyűzet szett súlya 561 g. A szett billentyűzete chiclet nyomógombokat kapott és ezt magyar nyelven.",
            properties: [
              { key: "Csatlakozási mód", value: "Vezeték nélküli"},
              { key: "Billentyűzet típusa", value: "Irodai"},
              { key: "Szín", value: " Szürke, Fekete"},
              { key: "Egér érzékenység", value: "4000 DPI"},
              { key: "Egér technológia", value: "Optikai"}
            ],
            quantity: 0
          },
          {
            name: "Hama KMW-700 Wireless Combo Antracit HU",
            price: 15590,
            description: "A billentyűzet és az egér a számítógép elengedhetetlen kelléke. A(z) Hama KMW-700 Wireless Combo Antracit HU mindkét komponenst tartalmazza. Az optikai egér a mozgás érzékeléséhez piros LED fényt használ. A technológia legnagyobb előnye, hogy alacsony áron is elérhető. Ezt a szenzációs billentyűzetet kimondottan irodai használatra fejlesztették ki. A(z) Hama által gyártott egér és billentyűzet szett össztömege 553 g. A szett billentyűzete alacsony profilú nyomógombokat kapott és ezt ráadásul magyar nyelven.",
            properties: [
              { key: "Csatlakozási mód", value: "Vezeték nélküli"},
              { key: "Billentyűzet típusa", value: "Irodai"},
              { key: "Szín", value: "Fekete"},
              { key: "Egér érzékenység", value: "2400 DPI"},
              { key: "Egér technológia", value: "Optikai"}
            ],
            quantity: 0
          },
          {
            name: "Rapoo 8050T Wireless Keyboard and mouse set, black",
            price: 11490,
            description: "A billentyűzet és az egér a PC elengedhetetlen tartozéka. A(z) Rapoo 8050T Wireless Keyboard and mouse set, black értelemszerűen mindkét komponenst tartalmazza. Ezt a kiváló minőségű billentyűzetet elsősorban normál irodai használatra fejlesztették ki.",
            properties: [
              { key: "Csatlakozási mód", value: "Vezeték nélküli"},
              { key: "Billentyűzet típusa", value: "Irodai"},
              { key: "Szín", value: "Fekete"}
            ],
            quantity: 0
          },
          {
            name: "MageGee K1-W Keyboard and Mouse Combo - US",
            price: 11790,
            description: "A MageGee K1-W Keyboard&Mouse Combo - US billentyűzet és egér szettet mindenki értékelni fogja. RGB háttérvilágítást és 104 dupla fröscsöntött billentyűket kínál Anti-Ghosting funkcióval. Ezzel az ergonomikus billentyűzettel az ujjaid nem fáradnak el még hosszabb használat során sem. Ez a gaming billentyűzet technikai ABS műanyaggal van felszerelve, hogy megakadályozza a kopást. Az alján csúszásmentes párnák találhatók, amelyek növelik a billentyűzet stabilitását. A készlet kompatibilis például a Windows 7, 8, 10, 11 operációs rendszerekkel, és a Plug and Play funkcióval rendelkezőUSB-csatlakozó segítségével csatlakoztathatod. Azegér ergonomikus, csúszásmentes kialakításával, a 7 féle háttérvilágítással, a 7 gombbal és 6 állítható DPI-szinttel minden bizonnyal elégedett leszel. A MageGee K1-W Keyboard&Mouse Combo - US billentyűzet és egész szett nemcsak otthon, hanem az irodában is jó szolgálatot tesz.",
            properties: [
              { key: "Csatlakozási mód", value: "Vezetékes"},
              { key: "Billentyűzet típusa", value: "Gamer"},
              { key: "Szín", value: "Fehér"},
              { key: "Egér érzékenység", value: "3200 DPI"}
            ],
            quantity: 0
          }
        ]
      },
      {
        name: "Monitor",
        imageUrl: "images/monitor.png",
        parts: [
          {
            name: "31,5\" LG UltraGear 32GR93U-B",
            price: 209790,
            description: "Amennyiben munkahelyi vagy személyes célból sok időt töltesz a monitor előtt, akkor a megfelelő típus kiválasztásával kellemesebbé és effektívebbé teheted a munkádat. Eme 31,5\" képátlójú LG LCD monitor még az igényes felhasználók elvárásait is kielégíti. 4K felbontása részletgazdag képet ígér. Ezenfelül perfekt választás lesz azoknak, akik grafikával dolgoznak. Tükröződésmentes felülete megakadályozza a környezeti fény visszaverődését.",
            properties: [
              { key: "Képátló", value: "80,01 cm"},
              { key: "Felbontás", value: "3840 × 2160"},
              { key: "Panel technológiája", value: "LCD"},
              { key: "Panel", value: "IPS"},
              { key: "Képfrissítési gyakoriság", value: "144 Hz"}
            ],
            quantity: 0
          },
          {
            name: "23.8\" MSI PRO MP243X",
            price: 31490,
            description: "Ha munkahelyi vagy személyes célból sok időt töltesz a monitor előtt, akkor a megfelelő típus kiválasztásával hatékonyabbá és kellemesebbé teheted a munkádat. Eme 23,8\" képátlójú MSI LCD monitor az összes követelményedet kielégíti. 1920 × 1080-es (Full HD) felbontása kitűnő képminőséget szavatol. Antireflexiós felülete megakadályozza a környezeti fény visszaverődését.",
            properties: [
              { key: "Képátló", value: "60,45 cm"},
              { key: "Felbontás", value: "1920 × 1080"},
              { key: "Panel technológiája", value: "LCD"},
              { key: "Panel", value: "IPS"},
              { key: "Képfrissítési gyakoriság", value: "100 Hz"}
            ],
            quantity: 0
          },
          {
            name: "34\" Samsung Odyssey G5",
            price: 148190,
            description: "A Samsung Odyssey G5 gamer monitor egy új szintre emeli a játék élményét. A csúcs-modern 1000R kijelző azonnal magával ragad az akcióba és a látómező minden egyes részét kitölti. Ennek köszönhetően sokkal intenzívebben érzékelheted a játékot és jobb teljesítményt nyújthatsz.",
            properties: [
              { key: "Képátló", value: "86,36 cm"},
              { key: "Felbontás", value: "3440 × 1440"},
              { key: "Panel technológiája", value: "LCD"},
              { key: "Panel", value: "VA"},
              { key: "Képfrissítési gyakoriság", value: "165 Hz"}
            ],
            quantity: 0
          },
          {
            name: "34\" Xiaomi G34WQi 2K Curved",
            price: 129790,
            description: "Hogyha személyes vagy munkahelyi célból rengeteg időt töltesz a monitor előtt, akkor a megfelelő típus kiválasztásával kellemesebbé teheted a munkádat. Eme 34\" képátlójú Xiaomi LCD monitor az összes igényedet kielégíti. Ezzel a varázslatos ívelt kijelzővel egyedülálló élményben lehet részed.",
            properties: [
              { key: "Képátló", value: "86,36 cm"},
              { key: "Felbontás", value: "3440 × 1440"},
              { key: "Panel technológiája", value: "LCD"},
              { key: "Panel", value: "VA"},
              { key: "Képfrissítési gyakoriság", value: "180 Hz"}
            ],
            quantity: 0
          },
          {
            name: "27\" ASUS TUF Gaming VG27AQA1A",
            price: 89990,
            description: "Ha személyes vagy munkahelyi célból rengeteg időt töltesz a monitor előtt, akkor a megfelelő típus kiválasztásával hatékonyabbá teheted a munkádat. Ezen 27\" képátlójú ASUS LCD monitor az igényes felhasználók elvárásait is kielégíti. 2560 × 1440-es (Quad HD) felbontása kiváló képminőséget biztosít. A matt felületű monitor kevésbé veri vissza a környező fényt, így akár erősebben megvilágított helyiségben is használható. Emellett a szemeidet sem terheli meg annyira.",
            properties: [
              { key: "Képátló", value: "68,58 cm"},
              { key: "Felbontás", value: "2560 × 1440"},
              { key: "Panel technológiája", value: "LCD"},
              { key: "Panel", value: "VA"},
              { key: "Képfrissítési gyakoriság", value: "170 Hz"}
            ],
            quantity: 0
          },
          {
            name: "27\" Lenovo Legion R27qe",
            price: 91490,
            description: "Monitor - IPS, Quad HD, 2560 × 1440 (16:9), 180 Hz, tükröződésmentes kijelző, 10 bit, 0,5 ms, FreeSync, állítható magasság, pivot, HDMI és DisplayPort, VESA ",
            properties: [
              { key: "Képátló", value: "68,58 cm"},
              { key: "Felbontás", value: "2560 × 1440"},
              { key: "Panel technológiája", value: "LCD"},
              { key: "Panel", value: "IPS"},
              { key: "Képfrissítési gyakoriság", value: "180 Hz"}
            ],
            quantity: 0
          }
        ]
      },
      {
        name: "SSD",
        imageUrl: "images/ssd.png",
        parts: [
          {
            name: "Kingston FURY Renegade NVMe 2TB",
            price: 59390,
            description: "Új számítógépet építesz vagy egy régit frissítesz? Vagy bővíteni szeretnéd a PlayStation 5 játékkonzol tárhelyét? Ebben az esetben értékelni fogod a Kingston Renegade NVMe M.2 továbbfejlesztett meghajtóját, amely támogatja a keresett PCIe 4.0 interfészt. Neki köszönhetően ugyanis nagy átviteli sebességet érhetsz el, amely pozitívan tükröződik a PC indításakor, az összetett alkalmazások vagy játékok betöltésekor, és a PC-vel való általános munka sokkal kényelmesebbé és gyorsabbá válik. Ugyanakkor ez a lemeztípus teljesen nélkülözi a forgó alkatrészeket, így a meghibásodási arány és az ezzel járó adatvesztés minimális.",
            properties: [
              { key: "Kapacitás", value: "2 TB"},
              { key: "Belső interfész", value: "M.2 (PCIe 4.0 4x NVMe)"},
              { key: "Olvasási sebesség", value: "7300 MB/s"},
              { key: "Írási sebesség", value: "7000 MB/s"}
            ],
            quantity: 0
          },
          {
            name: "Kingston A400 960GB 7mm",
            price: 21190,
            description: "A Kingston A400 egy 2,5\"-os SSD lemez 960 GB kapacitással, amely képes átváltoztatni a számítógépedet vagy a notebookodat hatékonyabb eszközzé. A készüléked frissítése még soha sem volt ilyen egyszerű. A mechanikus merevlemezhez képest a teljesítménynövekedés azonnal észrevehető. Amint elindítod a számítógépet, azonnal észre fogod venni, hogy az operációs rendszer betöltése sokkal gyorsabb. Más műveletek, mint például az alkalmazások futtatása, a másolás vagy a fájlok áthelyezése, nem fognak addig tartani, mint azelőtt.",
            properties: [
              { key: "Kapacitás", value: "960 GB"},
              { key: "Belső interfész", value: "SATA III"},
              { key: "Olvasási sebesség", value: "500 MB/s"},
              { key: "Írási sebesség", value: "450 MB/s"}
            ],
            quantity: 0
          },
          {
            name: "Kingston KC3000 NVMe 1TB",
            price: 34690,
            description: "Új számítógépet építesz vagy egy régit frissítesz? Ebben az esetben értékelni fogod a modern Kingston KC3000 M.2 meghajtót, amely támogatja a keresett PCIe 4.0 interfészt. Neki köszönhetően ugyanis magas átviteli sebességet érhetsz el, amely pozitívan befolyásolja a készülék rendszerindítását, az összetett alkalmazások vagy játékok betöltését, és összességében sokkal kényelmesebbé és gyorsabbá teszi a munkát a PC-ddel vagy a laptopoddal. Ugyanakkor az ilyen típusú meghajtókból teljes mértékben hiányoznak a forgó alkatrészek, így a meghibásodási arány és ezáltal a a kapcsolódó adatvesztés minimális.",
            properties: [
              { key: "Kapacitás", value: "1 024 GB"},
              { key: "Belső interfész", value: "M.2 (PCIe 4.0 4x NVMe)"},
              { key: "Olvasási sebesség", value: "7000 MB/s"},
              { key: "Írási sebesség", value: "6000 MB/s"}
            ],
            quantity: 0
          },
          {
            name: "Samsung 990 PRO 2TB",
            price: 73390,
            description: "Sok felhasználó kisebb forradalomnak tekinti a modern számítógépek konstrukciójánál. A(z) Samsung SSD merevlemez azok közé a PC alkatrészek közé tartozik, amelyek jelentősen javítják a számítógéped vagy egyéb készüléked betöltési idejét. A(z) Samsung 990 PRO 2TB elnevezésű modell M.2 aljzattal felszerelt személyi számítógépekhez, laptopokhoz és eszközökhöz készült. Az operációs rendszer és az adataid számára 2000 GB tárhely áll rendelkezésre. Ez a nagy adatmennyiséget kezelő adatközpontokhoz kiváló. A(z) Samsung 990 PRO 2TB M,2 (PCIe 4,0 4x NVMe) használatával csatlakoztatható.",
            properties: [
              { key: "Kapacitás", value: "2 TB"},
              { key: "Belső interfész", value: "M.2 (PCIe 4.0 4x NVMe)"},
              { key: "Olvasási sebesség", value: "7450 MB/s"},
              { key: "Írási sebesség", value: "6900 MB/s"}
            ],
            quantity: 0
          }
        ]
      },
      {
        name: "Operációs rendszer",
        imageUrl: "images/operating-system.png",
        parts: [
          {
            name: "MICROSOFT Windows 11 Home 64bit USB magyar",
            price: 57290,
            description: "A Windows 11 nyugodt, kreatív közeget és megújult élményt biztosít, hogy Ön szabadon élhessen a szenvedélyeinek. Megújult Start menü és új módok a kedvenc ismerősei, a hírek, a játékok és a különféle tartalmak eléréséhez – a Windows 11 természetes közeget biztosít a gondolkodáshoz, az önkifejezéshez és az alkotáshoz.",
            properties: [
              { key: "Nyelv", value: "Magyar"},
              { key: "Típus", value: "Microsoft Windows"}
            ],
            quantity: 0
          },
          {
            name: "MICROSOFT Windows 11 Pro 64bit OEM angol",
            price: 71590,
            description: "A Windows 11 nyugodt, kreatív közeget és megújult élményt biztosít, hogy Ön szabadon élhessen a szenvedélyeinek. Megújult Start menü és új módok a kedvenc ismerősei, a hírek, a játékok és a különféle tartalmak eléréséhez – a Windows 11 természetes közeget biztosít a gondolkodáshoz, az önkifejezéshez és az alkotáshoz.",
            properties: [
              { key: "Nyelv", value: "Angol"},
              { key: "Típus", value: "Microsoft Windows"}
            ],
            quantity: 0
          },
          {
            name: "MICROSOFT Windows 11 Pro 64bit USB magyar",
            price: 95590,
            description: "A Windows 11 nyugodt, kreatív közeget és megújult élményt biztosít, hogy Ön szabadon élhessen a szenvedélyeinek. Megújult Start menü és új módok a kedvenc ismerősei, a hírek, a játékok és a különféle tartalmak eléréséhez – a Windows 11 természetes közeget biztosít a gondolkodáshoz, az önkifejezéshez és az alkotáshoz.",
            properties: [
              { key: "Nyelv", value: "Magyar"},
              { key: "Típus", value: "Microsoft Windows"}
            ],
            quantity: 0
          },
          {
            name: "MICROSOFT Windows 10 Home 64bit OEM magyar",
            price: 28090,
            description: "A Windows 10 annyira ismerős és könnyen használható, hogy szakértőnek érezheti magát benne. A Start menü visszatért egy bővített formában, ezenkívül áthozzuk rögzített alkalmazásait és kedvenceit, hogy ezek készen állva várják Önt.",
            properties: [
              { key: "Nyelv", value: "Magyar"},
              { key: "Típus", value: "Microsoft Windows"}
            ],
            quantity: 0
          }
        ]
      }
    ];

}
