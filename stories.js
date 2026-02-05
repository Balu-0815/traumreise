// Stories data for the Traumreisen website.
// Each story contains an id, ageGroup (2‑5), title, a positive message or theme,
// a list of images (relative to the images folder) and the full text of the
// guided dream journey. The texts are written in German and address the Kind
// direkt mit „du“. Sie nutzen eine ruhige, bildhafte Sprache, um die
// Vorstellungskraft anzuregen und enthalten am Ende eine bestärkende Botschaft.

const stories = [
  // Altersgruppe 2 Jahre
  {
    id: '2-1',
    ageGroup: 2,
    title: 'Der Zaubergarten',
    theme: 'Du bist Teil dieser schönen Welt',
    images: ['5dcf596f-f1aa-4afd-a60e-e4c37ce4c5ac.png', '6021de67-8ca3-40be-a09e-17340309ad3e.png'],
    text: `Setz dich bequem hin und schließe deine Augen. Atme tief ein und aus.
Stell dir vor, du liegst auf weichem Gras in einem Zaubergarten. Die Sonne
schickt warme Strahlen auf deine Wangen, und ein sanfter Duft nach Blumen
liegt in der Luft. Um dich herum wachsen bunte Blumen in allen Formen und
Farben. Du siehst gelbe Gänseblümchen, rote Tulpen und blaue Vergissmeinnicht.
Schmetterlinge flattern fröhlich von Blüte zu Blüte. Du hörst das leise
Summen der Bienen und das Zwitschern der Vögel. In der Ferne plätschert
ein kleiner Bach, dessen Wasser klar und kühl aussieht. Du gehst barfuß über
die weiche Wiese und spürst, wie das Gras zwischen deinen Zehen kitzelt.
Vielleicht entdeckst du zwischen den Blumen eine kleine Fee, die dir zulächelt.
Sie hat glitzernde Flügel und einen kleinen Zauberstab, mit dem sie zarte
Lichtfunken in die Luft malt. Du fühlst dich sicher und geborgen in diesem
Garten. Du bist Teil dieser wunderschönen Natur, und alles freut sich,
dass du da bist. Am Ende setzt du dich auf einen gemütlichen Stein, schließt
noch einmal die Augen und spürst, wie dein Herz zufrieden schlägt. Du atmest
tief ein und nimmst die Schönheit in dir auf. Dann atmest du langsam aus und
kommst Stück für Stück wieder zurück. Du bist gut, so wie du bist, und
dieser Zaubergarten ist immer in deinem Herzen.`
  },
  {
    id: '2-2',
    ageGroup: 2,
    title: 'Reise zu den Sternen',
    theme: 'Die Welt ist voller Wunder',
    images: ['1770a138-5bde-4fdc-9f86-9c82f8498ffe.png', 'b42970fc-02d5-457f-a93a-ffb8c893122a.png'],
    text: `Mach es dir gemütlich und schließe deine Augen. Stell dir vor, es ist
Nacht und der Himmel funkelt voller Sterne. Eine besonders helle Sternschnuppe
kommt zu dir und sagt: „Möchtest du mit auf eine Reise kommen?“ Du setzt
dich auf den Stern und er hebt dich sanft in den Himmel. Die Luft ist kühl
und klar, und du fühlst dich wie eingekuschelt in eine weiche Decke. Unter
dir siehst du deine Stadt immer kleiner werden. Du fliegst vorbei an
leuchtenden Sternen, die wie glitzernde Punkte aussehen. Einige Sterne
zwinkern dir zu, als wollten sie dich begrüßen. Plötzlich siehst du den
Mond, der freundlich lächelt. Er erzählt dir Geschichten von fernen
Planeten und bunten Nebeln. Ihr fliegt um den Mond herum und siehst, wie
die Erde groß und rund erscheint. Alles sieht so friedlich aus von oben.
Der Stern, auf dem du sitzt, bringt dich zu einem besonderen Platz, an dem
die Sterne tanzen und zusammen ein Lied singen. Du hörst die leise Melodie
und spürst, wie dein Herz froh wird. Nach einer Weile sagt dir dein
Stern, dass es Zeit ist, zurückzukehren. Er bringt dich sicher wieder auf
die Erde und legt dich sanft in dein Bett. Du atmest tief ein und aus,
öffnest langsam die Augen und weißt: Die Welt ist voller Wunder, und du
darfst jederzeit davon träumen. Du bist gut, so wie du bist.`
  },
  {
    id: '2-3',
    ageGroup: 2,
    title: 'Die Regenbogenfahrt',
    theme: 'Du darfst träumen und staunen',
    // Verwende neu generierte Illustration der bunten Rutsche über den Regenbogen
    images: ['b713ea42-7446-45a5-bb50-447084db109c.png', '1da56509-079e-4656-bd4e-feeb4c53b53e.png'],
    text: `Schließe deine Augen und atme tief ein. Stell dir vor, ein warmer Regen
fällt und plötzlich erscheint ein bunter Regenbogen am Himmel. Am Ende
dieses Regenbogens wartet ein kleines Boot aus Licht. Du steigst ein und
das Boot gleitet den Regenbogen hinauf. Du fühlst den sanften Wind im
Gesicht und siehst, wie unter dir die Farben Rot, Orange, Gelb, Grün,
Blau und Lila leuchten. Jede Farbe hat ihren eigenen Duft: Rot riecht nach
Erdbeeren, Gelb nach Zitronen, Grün nach frischem Gras und Blau wie das Meer.
Während du den Bogen entlangfährst, begegnen dir Wolken, die wie Zuckerwatte
auss­e­hen. Du pflückst ein Stück davon und lässt es auf deiner Zunge
schmelzen – es schmeckt süß und macht dich fröhlich. Ganz oben
auf dem Regenbogen wartet ein kleiner freundlicher Wichtel mit roter Mütze.
Er winkt dir und schenkt dir ein kleines Licht. „Dieses Licht erinnert
dich immer daran, dass du träumen darfst“, sagt er. Danach gleitet dein
Boot langsam wieder hinunter und bringt dich sicher zurück. Du legst das
Licht in dein Herz und atmest tief ein. Wenn du die Augen wieder öffnest,
fühlst du, wie warm und hell dieses Licht ist. Du darfst träumen und
staunen, und du bist genau richtig, so wie du bist.`
  },
  {
    id: '2-4',
    ageGroup: 2,
    title: 'Waldfreunde',
    theme: 'Freunde sind überall',
    images: ['8f2744bc-2aeb-441e-8a68-7953eefcf6e2.png', 'a0377c18-738d-4ffb-a14a-6adc947efe2d.png'],
    text: `Mach es dir gemütlich und schließe deine Augen. Stell dir einen
friedlichen Wald vor. Die Bäume sind hoch und ihre Blätter rauschen leise im
Wind. Du gehst einen kleinen Waldweg entlang und spürst die weiche Erde
unter deinen Füßen. Ein Eichhörnchen springt von Ast zu Ast und schaut
dich neugierig an. Ein Reh steht am Wegesrand und nickt dir zu. Du fühlst
dich willkommen. In der Mitte des Waldes entdeckst du eine kleine Lichtung,
auf der sich viele Tiere treffen. Sie bilden einen Kreis um einen großen
alten Baum. Eine Eule sitzt auf einem Ast und erzählt von ihren nächtlichen
Flügen. Ein Dachs teilt Beeren aus, und eine Igelmama lässt dich ihre
kleinen Stacheln berühren – sie sind gar nicht so spitz, wie du denkst.
Plötzlich kommt ein kleiner Wichtel aus dem Wurzelwerk und lacht. „Wir
sind alle Freunde hier“, sagt er. „Du gehörst dazu, so wie du bist.“
Ihr singt zusammen ein Lied, und du spürst, wie das Lied dein Herz wärmt.
Am Ende verabschieden sich die Tiere von dir. Du gehst zurück zum
Waldweg, atmest den Duft der Bäume ein und weißt, dass du immer wieder zu
deinen Waldfreunden kommen kannst. Du öffnest langsam die Augen und
spürst, wie schön es ist, Freunde überall zu haben. Du bist gut, so wie du
bist.`
  },
  {
    id: '2-5',
    ageGroup: 2,
    title: 'Sandburg am Meer',
    theme: 'Du kannst kreativ sein',
    images: ['1da56509-079e-4656-bd4e-feeb4c53b53e.png', '1770a138-5bde-4fdc-9f86-9c82f8498ffe.png'],
    text: `Lege dich hin und schließe deine Augen. Stell dir vor, du bist an einem
sonnigen Strand. Die Wellen des Meeres rauschen leise, und das Wasser riecht
nach Salz. Der Sand ist warm unter deinen Fingern. Du fängst an, mit deinen
Händen eine große Sandburg zu bauen. Du formst Türme, Brücken und ein Tor.
Ein freundlicher kleiner Fisch springt aus dem Wasser und hilft dir, einen
Graben zu ziehen, damit das Wasser die Burg schützt. Eine Muschel
leuchtet in der Sonne, und du schmückst damit das Dach deiner Burg. Plötzlich
taucht eine kleine Meerjungfrau auf. Sie hat glänzende Schuppen und lacht
fröhlich. Sie zeigt dir, wie du den Sand glatt streichen kannst, damit
deine Burg fest steht. Zusammen baut ihr ein Schloss, das groß und stark ist.
Als ihr fertig seid, setzt sich eine Fee auf den höchsten Turm und legt
einen glitzernden Stein hinein. „Dieser Stein erinnert dich daran, dass
du kreativ bist“, sagt sie. Das Meer rauscht weiter und deine Sandburg
steht stolz da. Du setzt dich daneben, spürst den warmen Sand zwischen
den Fingern und das kühle Wasser an den Zehen. Du weißt, dass du
alles erschaffen kannst, was du dir vorstellst. Du atmest tief ein, öffnest
die Augen und trägst dieses Gefühl mit dir. Du bist gut, so wie du bist.`
  },
  {
    id: '2-6',
    ageGroup: 2,
    title: 'Wolkenkissen',
    theme: 'Du bist geborgen und sicher',
    images: ['1770a138-5bde-4fdc-9f86-9c82f8498ffe.png', '6021de67-8ca3-40be-a09e-17340309ad3e.png'],
    text: `Mach es dir bequem und schließe deine Augen. Stell dir vor, du liegst auf
einem großen, weichen Wolkenkissen. Die Wolke ist so flauschig, dass du
darauf hüpfen kannst, ohne zu fallen. Über dir glitzern kleine Sterne,
und du spürst die sanfte Bewegung der Wolke, wenn sie am Himmel entlang
schwebt. Eine kleine Fee kommt zu dir und legt eine Decke aus Sternenlicht
über dich. „Du bist sicher“, flüstert sie. Gemeinsam schaut ihr auf
die Erde, die weit unter euch liegt. Ihr seht Wälder, Seen und kleine
Häuser. Du fühlst dich wie in einer Höhle aus Licht und Watte. Dein Herz
schlägt ruhig und gleichmäßig. Die Wolke bringt dich zu einer großen,
glitzernden Sternenbrücke. Dort wartet ein Einhorn auf dich, das bunte
Mähne hat und dir den Rücken zum Reiten anbietet. Ihr macht einen kleinen
Ausflug über die Sterne, bevor das Einhorn dich wieder zu deiner Wolke
zurückbringt. Du kuschelst dich noch tiefer in das Wolkenkissen und
merkst, wie warm und weich es ist. Wenn du langsam deine Augen öffnest,
hast du das Gefühl, dass die Wolke immer noch da ist, um dich zu
beschützen. Du bist geborgen und sicher, und du bist perfekt, so wie du bist.`
  },
  {
    id: '2-7',
    ageGroup: 2,
    title: 'Feenlicht',
    theme: 'Deine Fantasie ist stark',
    images: ['6021de67-8ca3-40be-a09e-17340309ad3e.png', '5dcf596f-f1aa-4afd-a60e-e4c37ce4c5ac.png'],
    text: `Schließe deine Augen und atme ruhig. Stell dir vor, es ist Abend und du
siehst in deinem Zimmer ein kleines, warmes Licht flackern. Du folgst dem
Licht und bemerkst, dass es von einer winzigen Fee stammt, die in der
Luft schwebt. Sie hat leuchtende Flügel, die wie kleine Lampe
funkeln. Sie lädt dich ein, ihr zu folgen. Ihr schwebt zusammen durch die
Nacht hinaus in einen magischen Wald. Dort hängen in den Bäumen viele
kleine Lichter, und überall sind leise Glöckchen zu hören. Die Fee zeigt
dir, wie du mit deinen Gedanken dein eigenes Licht erschaffen kannst. Du
stellst dir vor, wie ein kleiner Stern in deiner Hand entsteht. Er leuchtet
heller, wenn du daran denkst, wie stark deine Fantasie ist. Du setzt
den Stern in dein Herz und spürst seine Wärme. Die Fee flüstert dir zu:
„Wann immer du traurig bist, erinnere dich an das Licht in deinem Herzen.“
Langsam führt sie dich wieder zurück. Als du wieder in deinem Bett
liegst, fühlst du das warme Licht in dir leuchten. Du öffnest die Augen
und weißt: Deine Fantasie ist stark, und du bist gut, so wie du bist.`
  },
  {
    id: '2-8',
    ageGroup: 2,
    title: 'Wichtelhaus',
    theme: 'Du bist willkommen',
    images: ['a0377c18-738d-4ffb-a14a-6adc947efe2d.png', 'ec0dc4e4-97de-4ba8-8fcd-05f5c321cf76.png'],
    text: `Mach es dir gemütlich und schließe deine Augen. Stell dir vor, du
spazierst durch einen herbstlichen Wald. Die Blätter knistern unter deinen
Füßen und riechen angenehm nach frischer Erde. Am Fuß einer großen Eiche
entdeckst du eine kleine Tür. Sie ist bunt bemalt und hat einen winzigen
Klingelknopf. Du klopfst vorsichtig an und die Tür geht auf. Ein
freundlicher Wichtel mit roter Mütze begrüßt dich. „Komm herein“, sagt
er, „du bist herzlich willkommen.“ Du bückst dich und gehst hinein.
Im Innern leuchtet eine Laterne. Es gibt winzige Möbel, kleine
Holzbetten und einen Tisch mit leckeren Keksen. Der Wichtel zeigt dir
sein Haus und erzählt dir Geschichten von seinen Freunden, den Feen und
Eichhörnchen. Er hat ein kleines Geschenk für dich: ein Herz aus Holz.
„Dieses Herz erinnert dich daran, dass du immer willkommen bist“, sagt
er. Ihr trinkt zusammen warmen Apfelsaft und lacht viel. Nach einer
Weile verabschiedest du dich, gehst durch die Tür zurück in den Wald und
spürst den Herbstwind im Gesicht. Du weißt, dass der Wichtel immer
da ist. Du öffnest deine Augen und fühlst dich warm und angenommen. Du bist
willkommen, genauso wie du bist.`
  },
  {
    id: '2-9',
    ageGroup: 2,
    title: 'Dschungeltanz',
    theme: 'Mutig tanzen und lachen',
    images: ['8f2744bc-2aeb-441e-8a68-7953eefcf6e2.png', '1da56509-079e-4656-bd4e-feeb4c53b53e.png'],
    text: `Leg dich bequem hin und schließe deine Augen. Stell dir vor, du bist in
einem bunten Dschungel voller großer Pflanzen und farbenfroher Blumen. Du
hast eine Blättermütze auf dem Kopf und gehst vorsichtig über den weichen
Waldboden. Über dir singen Vögel mit hellen Stimmen, und in der Ferne
hört man Trommeln. Du gehst zu der Musik und kommst auf eine Lichtung, auf
der viele Tiere fröhlich tanzen. Ein Affe schwingt sich von Liane zu
Liane und lacht dabei. Ein Papagei mit bunten Federn fliegt kreisend
über euch und ruft freudig. Ein Elefantenbaby stampft im Rhythmus der
Trommel und spritzt Wasser aus seinem Rüssel. Alle Tiere laden dich ein,
mitzutanzen. Anfangs bist du vielleicht schüchtern, doch dann merkst du,
wie viel Spaß es macht, deine Beine und Arme zu bewegen. Du drehst dich
im Kreis, lachst laut und spürst, wie frei du bist. Ein Wichtel mit einer
kleinen Trommel kommt dazu und gibt den Rhythmus vor. Gemeinsam tanzt ihr,
bis ihr müde werdet. Zum Abschied umarmt dich der Elefant mit seinem
Rüssel und flüstert: „Du bist mutig und kannst immer wiederkommen.“
Langsam gehst du zurück, atmest den Duft der Pflanzen ein und fühlst, wie
fröhlich dein Herz schlägt. Du öffnest die Augen und weißt: Es ist gut,
mutig zu tanzen und zu lachen. Du bist gut, so wie du bist.`
  },
  {
    id: '2-10',
    ageGroup: 2,
    title: 'Traumlok',
    theme: 'Du darfst genießen und zurückkehren',
    images: ['b42970fc-02d5-457f-a93a-ffb8c893122a.png', 'ec0dc4e4-97de-4ba8-8fcd-05f5c321cf76.png'],
    text: `Schließe deine Augen und stell dir vor, du stehst an einem kleinen
Bahnhof, wo eine bunte Lokomotive wartet. Sie hat Räder aus Zuckerstangen und
ein Dach aus Schokolade. Der Lokführer ist ein fröhlicher Wichtel mit
Streifenmütze. Er winkt dir zu: „Steig ein, wir fahren in die
Traumstadt!“ Du steigst in den Zug und setzt dich auf einen Sitz aus
weichen Marshmallows. Der Zug fährt los und das leise Tuckern des Motors
wiegt dich hin und her. Vor deinem Fenster ziehen Bilder vorbei: ein
Regenbogenland voller Lutscher, ein Wolkenmeer mit Zuckerwatteinseln und
eine Stadt aus Lebkuchen. An jedem Haltepunkt kannst du aussteigen und
eine Kostbarkeit probieren. Du beißt vorsichtig in einen Lebkuchenbaum
und schmeckst den süßen Zimt. Du nimmst dir eine kleine Schokoladenfigur
mit nach Hause. Der Wichtel erinnert dich daran, immer nur so viel
zu nehmen, wie du brauchst, und dankbar zu sein. Nach einer Weile bringt
dich der Zug wieder zurück. Du steigst aus, winkst dem Lokführer und
spürst, wie gemütlich dein Bett ist. Du atmest tief ein und nimmst den
Duft der Traumstadt mit in deine Gedanken. Du öffnest die Augen und
weißt: Du darfst genießen und jederzeit zurückkehren, ohne dass etwas
verloren geht. Du bist gut, so wie du bist.`
  },

  // Altersgruppe 3 Jahre
  {
    id: '3-1',
    ageGroup: 3,
    title: 'Die Sonnenblume',
    theme: 'Du wächst jeden Tag',
    images: ['5dcf596f-f1aa-4afd-a60e-e4c37ce4c5ac.png', '1770a138-5bde-4fdc-9f86-9c82f8498ffe.png'],
    text: `Mach es dir bequem und schließe deine Augen. Stell dir vor, du bist ein
kleiner Samen, der in der Erde ruht. Es ist dunkel und warm. Du spürst, wie
der Regen auf dich fällt und dich mit Wasser versorgt. Langsam wächst
eine kleine Wurzel aus dir heraus, und du schlängelst dich durch die Erde
nach oben. Schließlich brichst du durch die Erde und siehst das Licht
zum ersten Mal. Du bist jetzt eine kleine Pflanze, und die Sonne wärmt
dich mit ihren Strahlen. Jeden Tag wirst du größer. Deine Blätter
werden grün und stark, und dein Stängel wächst Richtung Himmel. Du
hörst Vögel singen und spürst den Wind, der durch deine Blätter weht.
Schließlich wächst aus dir eine wunderschöne Sonnenblume mit gelben
Blütenblättern. Bienen besuchen dich und sammeln deinen süßen Nektar.
Du fühlst dich voller Energie. Du drehst deinen Kopf immer zur Sonne,
weil du spürst, wie sie dir gut tut. Du merkst, dass es normal ist,
manchmal klein zu sein und zu wachsen. In jeder Phase bist du wertvoll.
Schließlich legst du deinen Kopf leicht zur Seite und ruhst dich aus. Du
atmest tief ein und aus, öffnest langsam die Augen und weißt: Du wächst
jeden Tag, und du bist gut, so wie du bist.`
  },
  {
    id: '3-2',
    ageGroup: 3,
    title: 'Sternenbäckerei',
    theme: 'Du kannst Neues lernen',
    images: ['b42970fc-02d5-457f-a93a-ffb8c893122a.png', '6021de67-8ca3-40be-a09e-17340309ad3e.png'],
    text: `Lege dich hin und schließe deine Augen. Stell dir vor, du stehst in
einer Sternenbäckerei mitten im Himmel. Überall glitzern Sterne und
funken wie Zuckerstreusel. Der Bäcker ist ein freundlicher Wichtel mit
einer weißen Schürze. Er zeigt dir, wie man Sternenkekse backt. Ihr
vermischt Mehl, Zucker und Sternenstaub in einer großen Schüssel. Dann
rollt ihr den Teig aus und stecht kleine Sterne aus. Du spürst den Teig
zwischen deinen Fingern und riechst den süßen Duft. Der Wichtel erzählt dir,
dass jedes Rezept ein bisschen Geduld braucht. Du lernst, wie du die
Kekse mit glitzernder Glasur bestreichst und mit funkelnden Perlen
verzierst. Zusammen schiebt ihr das Backblech in einen Ofen aus
Mondstein. Während die Kekse backen, erzählt dir der Wichtel eine
Geschichte über eine Fee, die mit ihren Flügeln den Zuckerstaub
verteilt. Als die Kekse fertig sind, schmecken sie himmlisch. Der Wichtel
gibt dir eine Schachtel voll mit, damit du sie mit deinen Liebsten teilen
kannst. Beim Abschied sagt er: „Du kannst alles lernen, wenn du dir
Zeit lässt und Spaß daran hast.“ Du atmest tief ein, öffnest langsam
die Augen und spürst, wie schön es ist, Neues zu lernen. Du bist gut, so
wie du bist.`
  },
  {
    id: '3-3',
    ageGroup: 3,
    title: 'Wolkenzirkus',
    theme: 'Du hast Talente',
    images: ['1770a138-5bde-4fdc-9f86-9c82f8498ffe.png', '8f2744bc-2aeb-441e-8a68-7953eefcf6e2.png'],
    text: `Schließe deine Augen und stelle dir vor, du fliegst auf einer Wolke
über den Himmel. Du landest bei einem Zirkus hoch oben über den Wolken.
Die Zirkuskuppel besteht aus Regenbögen und glitzernden Sternen. Ein
lustiger Clown begrüßt dich und malt dir eine bunte Nase. Du hörst
Musik und siehst Tiere und Wesen, die Kunststücke aufführen: Ein
Einhorn hüpft elegant durch Reifen aus Licht, ein Löwe balanciert auf
einer Kugel und ein kleiner Drache bläst bunte Seifenblasen. Ein Wichtel
trommelt den Rhythmus, während Feen wie Funken umherfliegen. Du darfst
selbst in die Manege treten. Vielleicht möchtest du auf dem Trampolin
hüpfen, auf einem Seil balancieren oder einen Tanz aufführen. Die anderen
applaudieren und lachen mit dir. Du fühlst dich stolz, weil du dich
traust, etwas Neues auszuprobieren. Nach dem Auftritt verbeugst du dich
und hörst den Applaus. Du weißt, dass du Talente hast, die du entdecken
darfst. Am Ende setzt du dich wieder auf deine Wolke, atmest tief ein
und aus und öffnest langsam die Augen. Du bist gut, so wie du bist, und
deine Talente machen dich besonders.`
  },
  {
    id: '3-4',
    ageGroup: 3,
    title: 'Zaubersee',
    theme: 'Du bist ruhig und mutig',
    // Unterwasserabenteuer – neue Korallenriff‑Illustration als erstes Bild
    images: ['70250eec-82f0-4159-be70-6b930bb8b55f.png', '6021de67-8ca3-40be-a09e-17340309ad3e.png'],
    text: `Mach es dir gemütlich und schließe deine Augen. Stell dir vor, du
spazierst zu einem glitzernden See in einem stillen Wald. Der See ist so
ruhig, dass du dein Spiegelbild sehen kannst. Du setzt dich an das Ufer und
tauchst deine Zehen ins Wasser. Es ist angenehm kühl. Ein kleiner Fisch
schwimmt vorbei und streicht über deine Füße. Du hörst das leise Plätschern
und das Rascheln der Blätter im Wind. Plötzlich erscheint eine Fee über
dem Wasser. Sie hat ein Kleid aus Wassertropfen und lächelt dir zu.
„Dieser See ist voller Mut“, sagt sie. Sie zeigt dir, wie du auf einem
großen Blatt über das Wasser gleiten kannst. Anfangs bist du unsicher, doch
das Blatt trägt dich sicher. Du spürst die Frische des Wassers und
hörst die Vögel, die dich begleiten. Bald fühlst du dich ruhig und stark.
Du gleitest zum gegenüberliegenden Ufer und siehst dort einen Baum, der
dir einen funkelnden Stein schenkt. „Dieser Stein ist dein Mut“, sagt die
Fee. Du steckst den Stein in deine Tasche und kehrst zurück. Du atmest
tief ein, öffnest langsam die Augen und weißt: Du bist ruhig und mutig, und
du bist perfekt, so wie du bist.`
  },
  {
    id: '3-5',
    ageGroup: 3,
    title: 'Baum der Wünsche',
    theme: 'Deine Wünsche sind wichtig',
    // Baumhaus bei Nacht – neue Illustration
    images: ['97b1f58d-95dc-4a65-8b87-45105cca15a5.png', '5dcf596f-f1aa-4afd-a60e-e4c37ce4c5ac.png'],
    text: `Schließe deine Augen und atme ruhig. Stell dir vor, du gehst durch
eine bunte Blumenwiese zu einem besonderen Baum. Dieser Baum ist riesig
und hat Blätter in allen Farben des Regenbogens. Überall hängen kleine
Windspiele, die leise klingen, wenn ein Windhauch vorbeistreicht. Auf dem
Stamm siehst du kleine Schubladen und Türen. Der Baum ist der Baum der
Wünsche. Eine kleine Eule sitzt auf einem Ast und lädt dich ein,
deinen Wunsch dem Baum anzuvertrauen. Du legst deine Hände an die Rinde
und denkst an einen Wunsch, der aus deinem Herzen kommt. Vielleicht wünschst
du dir Mut, Freude oder einen neuen Freund. Du spürst, wie der Baum
deinen Wunsch hört und ihn behutsam in seinen Ästen speichert. Aus einer
Schublade fällt ein kleines Blatt in deine Hände. Auf dem Blatt steht
„Dein Wunsch ist wichtig und findet seinen Weg“. Du legst es an dein
Herz und fühlst dich verstanden. Am Ende setzt du dich unter den Baum,
atmest den Duft von Blättern ein und öffnest langsam die Augen. Deine
Wünsche sind wichtig, und du bist gut, so wie du bist.`
  },
  {
    id: '3-6',
    ageGroup: 3,
    title: 'Abenteuer im Zauberwald',
    theme: 'Du findest deinen Weg',
    images: ['8f2744bc-2aeb-441e-8a68-7953eefcf6e2.png', '5dcf596f-f1aa-4afd-a60e-e4c37ce4c5ac.png'],
    text: `Mach es dir gemütlich und schließe deine Augen. Stell dir vor, du
befindest dich am Eingang eines geheimnisvollen Zauberwaldes. Ein Weg aus
glitzernden Steinen führt dich hinein. Die Bäume haben leuchtende Blätter
und zwischen den Zweigen hängen kleine Laternen. Du hörst leises Murmeln,
als würdest du willkommen geheißen. Auf deinem Weg begegnet dir ein
freundliches Einhorn mit einer Mähne, die in allen Farben schillert. Es
begleitet dich und zeigt dir, wie man die magischen Steine liest. Jeder
Stein leuchtet auf, wenn du den richtigen Schritt machst. Manchmal
scheint der Weg sich zu verlieren, doch das Einhorn und die kleinen Wichtel,
die im Moos wohnen, flüstern dir, dass du deinem Herzen folgen sollst.
Du hörst auf dein Gefühl und findest den Weg zu einer Lichtung, auf der
eine alte Eiche steht. Unter der Eiche entdeckst du eine Schatztruhe. In
ihr liegt ein Spiegel, der dir dein Lächeln zeigt. „Der größte Schatz
bist du selbst“, steht eingraviert. Du nimmst diese Erkenntnis mit dir
und kehrst zurück. Beim Ausatmen öffnest du langsam die Augen und weißt:
Du findest immer deinen Weg, wenn du auf dich selbst vertraust. Du bist
gut, so wie du bist.`
  },
  {
    id: '3-7',
    ageGroup: 3,
    title: 'Drachenflug',
    theme: 'Du bist stark',
    images: ['b42970fc-02d5-457f-a93a-ffb8c893122a.png', '1da56509-079e-4656-bd4e-feeb4c53b53e.png'],
    text: `Lege dich hin, schließe deine Augen und atme tief ein. Stell dir vor,
ein kleiner Drache sitzt neben dir. Er hat weiche, schimmernde Schuppen
und sanfte Augen. Der Drache lädt dich ein, auf seinem Rücken Platz zu
nehmen. Du steigst auf und spürst seine warme Haut. Mit einem kräftigen
Flügelschlag hebt er ab und ihr fliegt in die Luft. Der Wind weht durch
deine Haare, und du fühlst dich frei. Ihr fliegt über Berge und Seen,
vorbei an Wolken, die wie Watte aussehen. Unten siehst du Wälder und
Städte, die winzig wirken. Der Drache zeigt dir seine Lieblingsplätze:
eine Wasserfallhöhle, in der das Wasser wie Diamanten glitzert, und eine
wunderschöne Blumenwiese. Als ihr über einen hohen Berg fliegt, siehst
du, wie weit du gekommen bist. Du spürst deinen Mut und deine Stärke.
Der Drache landet mit dir auf einer grünen Wiese und gibt dir eine
Schuppe als Andenken. „Diese Schuppe erinnert dich daran, dass du
stark bist“, sagt er. Du atmest tief ein, öffnest langsam die Augen
und weißt: Du bist stark, und du bist gut, so wie du bist.`
  },
  {
    id: '3-8',
    ageGroup: 3,
    title: 'Gute‑Nacht‑Wichtel',
    theme: 'Du bist geliebt',
    images: ['a0377c18-738d-4ffb-a14a-6adc947efe2d.png', '6021de67-8ca3-40be-a09e-17340309ad3e.png'],
    text: `Mach es dir kuschelig und schließe deine Augen. Stell dir vor, du liegst
in deinem Bett und hörst ein leises Klopfen. Ein kleiner Gute‑Nacht‑Wichtel
tritt herein. Er hat eine weiche Decke und ein Buch dabei. Er setzt sich
zu dir und beginnt, dir eine Geschichte zu erzählen. Seine Stimme ist
sanft und beruhigend. Während er liest, siehst du die Geschichte vor
deinem inneren Auge: ein Abenteuer voller Einhörner, Feen und Mut. Der
Wichtel deckt dich zu und streicht dir über die Stirn. „Du bist geliebt
und niemals allein“, flüstert er. Du spürst seine Wärme und hörst
seinem Atem zu, bis du dich ganz ruhig fühlst. Der Wichtel verlässt
leise dein Zimmer, doch er lässt einen Funken seines Lichts zurück. Du
spürst, wie das Licht in deinem Herzen bleibt. Du atmest tief ein und
aus, öffnest langsam die Augen und weißt: Du bist geliebt, genau so,
wie du bist.`
  },
  {
    id: '3-9',
    ageGroup: 3,
    title: 'Seifenblasenreise',
    theme: 'Du bist fröhlich',
    images: ['1770a138-5bde-4fdc-9f86-9c82f8498ffe.png', 'b42970fc-02d5-457f-a93a-ffb8c893122a.png'],
    text: `Schließe deine Augen und atme ruhig. Stell dir vor, du hältst eine
Flasche Seifenblasen in der Hand. Du bläst in den Stab und siehst, wie
bunte Blasen in die Luft steigen. Jede Blase glitzert in den Farben des
Regenbogens. Plötzlich wird eine Blase so groß, dass du hineinschlüpfen
kannst. Du spürst die sanfte, runde Haut der Blase um dich herum. Mit
der Blase schwebst du über deine Stadt und siehst die Dächer wie kleine
Quadrate. Du fliegst über grüne Felder, bunte Blumen und glitzernde Seen.
In deiner Blase fühlst du dich leicht und fröhlich. Ein kleiner
Wichtel fliegt neben dir auf seiner eigenen Blase und macht Grimassen.
Ihr lacht zusammen, und dein Lachen klingt wie Glocken. Die Blase bringt
dich an einen Ort, an dem sich Feen und Tiere treffen, um zu tanzen.
Alle laden dich ein, mitzutanzen. Du springst und drehst dich, und dein
Herz lacht. Als es Zeit ist zurückzukehren, bringt dich die Blase sanft
auf den Boden. Du steigst aus, atmest tief ein, öffnest deine Augen und
spürst: Du bist fröhlich, und dieses Lachen bleibt immer in dir. Du bist
gut, so wie du bist.`
  },
  {
    id: '3-10',
    ageGroup: 3,
    title: 'Reise zur Kuschelwolke',
    theme: 'Geborgenheit',
    images: ['1770a138-5bde-4fdc-9f86-9c82f8498ffe.png', '1da56509-079e-4656-bd4e-feeb4c53b53e.png'],
    text: `Lege dich hin, schließe deine Augen und atme tief ein. Stell dir vor,
es kommt eine weiche, flauschige Wolke zu dir. Sie lädt dich ein,
einzusteigen. Du setzt dich in die Wolke, die sich wie ein Kissen
anfühlt, und sie schwebt mit dir durch den Himmel. Du siehst den
Sonnenuntergang, der den Himmel in warme Farben taucht. Die Wolke bringt
dich zu einem geheimen Ort über den Wolken, an dem sich Kuscheltiere
treffen. Ein großer Teddybär winkt dir zu und nimmt dich in seine
Arme. Ein kleiner Hase mit langen Ohren kuschelt sich an dich, und eine
Fee deckt euch mit einer Decke aus Sternenstaub zu. Ihr liegt dort,
hört dem Wind zu und fühlt euch geborgen. Die Wolke flüstert dir zu,
wie lieb sie dich hat und dass du immer willkommen bist, wenn du Ruhe
brauchst. Nach einer Weile bringt sie dich langsam zurück. Du öffnest
deine Augen und spürst die Geborgenheit noch in deinem Herzen. Du bist
geborgen, und du bist gut, so wie du bist.`
  },

  // Altersgruppe 4 Jahre (Lena liebt Einhörner, Feen und Wichtel)
  {
    id: '4-1',
    ageGroup: 4,
    title: 'Lenas Einhornfreund',
    theme: 'Du bist einzigartig',
    images: ['5dcf596f-f1aa-4afd-a60e-e4c37ce4c5ac.png', '6021de67-8ca3-40be-a09e-17340309ad3e.png'],
    text: `Setz dich bequem hin und schließe deine Augen. Stell dir vor, du
spazierst durch einen leuchtenden Wald. Die Bäume sind so hoch, dass ihre
Kronen den Himmel berühren. Plötzlich hörst du ein leises Wiehern. Aus
den Büschen tritt ein Einhorn hervor. Seine Mähne schimmert in den
Farben des Regenbogens und seine Augen funkeln wie Sterne. Das Einhorn
stellt sich als dein Freund vor. Es lädt dich ein, auf seinem Rücken
Platz zu nehmen. Ihr reitet zusammen durch den Wald. Das Einhorn zeigt dir
einen versteckten See, dessen Wasser so klar ist, dass ihr euch darin
spiegeln könnt. „Du bist einzigartig, wie dieser See“, sagt das Einhorn.
Ihr springt über kleine Bäche und lacht miteinander. Unterwegs trefft ihr
eine Fee, die bunte Blumenblätter verstreut und euch einlädt, einen
Kranz zu flechten. Ihr setzt euch hin und flechtet einen Kranz aus
Blumen. Dabei erzählt dir das Einhorn von seinen Abenteuern. Du spürst
die Wärme der Sonne und den weichen Rücken des Einhorns. Am Ende
verabschiedet sich dein Einhornfreund und gibt dir einen funkelnden
Kristall. Dieser Kristall erinnert dich daran, dass du etwas Besonderes
und Einzigartiges bist. Du atmest tief ein, öffnest langsam die Augen
und trägst das Gefühl in deinem Herzen: Du bist einzigartig und gut, so
wie du bist.`
  },
  {
    id: '4-2',
    ageGroup: 4,
    title: 'Feenwald‑Abenteuer',
    theme: 'Deine Träume führen dich',
    images: ['6021de67-8ca3-40be-a09e-17340309ad3e.png', 'a0377c18-738d-4ffb-a14a-6adc947efe2d.png'],
    text: `Mach es dir bequem und schließe deine Augen. Stell dir einen geheimen
Feenwald vor, der nur erscheint, wenn man daran glaubt. Der Wald ist voller
schimmernder Spinnennetze, auf denen Morgentau wie Diamanten glitzert.
Feuerfliegen tanzen in der Luft. Du hörst sanfte Glockenklänge, die aus
den Feenhäusern kommen. Eine Fee mit silbernen Flügeln nimmt deine
Hand. Sie führt dich zu einem alten Baum, dessen Wurzeln einen kleinen
Tunnel bilden. Zusammen kriecht ihr hindurch und gelangt zu einer
Lichtung, in deren Mitte ein Tisch aus Pilzen steht. Dort sitzen Feen und
Wichtel gemeinsam und planen eine Reise zu einem Wunschstern. Du darfst
einen Wunsch wählen und mit den Feen aufbrechen. Ihr fliegt auf
Libellenrücken durch den Wald. Der Wind weht durch deine Haare, und du
spürst, wie deine Träume dich leiten. Die Fee sagt: „Deine Träume
zeigen dir, wohin du gehen sollst.“ Nach dem Abenteuer setzt du dich an
den Rand der Lichtung und atmest tief ein. Du hörst die leisen Lieder
der Feen und fühlst dich getragen. Du öffnest langsam deine Augen und
weißt: Deine Träume führen dich und du bist gut, so wie du bist.`
  },
  {
    id: '4-3',
    ageGroup: 4,
    title: 'Der Wichtelschatz',
    theme: 'Schätze in dir entdecken',
    images: ['a0377c18-738d-4ffb-a14a-6adc947efe2d.png', 'ec0dc4e4-97de-4ba8-8fcd-05f5c321cf76.png'],
    text: `Lege dich hin und schließe deine Augen. Stell dir vor, ein Wichtel
klopft an deine Tür. Er hat eine Karte dabei und sagt, dass er einen
besonderen Schatz sucht – und dass du ihn begleiten sollst. Ihr geht
zusammen in den Wald. Auf der Karte stehen Hinweise, die dich zu
verschiedenen Orten führen. Du besuchst eine Wiese voller Gänseblümchen,
eine Höhle mit glitzernden Kristallen und einen Bach, der leise
plätschert. Bei jedem Halt lernst du etwas über dich: Die Blume sagt dir,
dass du wachsen darfst, die Kristalle zeigen, wie sehr du strahlen
kannst, und das Wasser erinnert dich daran, dass du manchmal fließen
lassen musst. Schließlich kommt ihr an einen großen alten Baum. In seinem
Stamm ist eine Höhle verborgen. Darin findest du einen Spiegel. Der
Wichtel sagt: „Der größte Schatz bist du – sieh selbst.“ Du schaust
dich im Spiegel an und siehst dein Lächeln. Der Wichtel übergibt dir
eine kleine Truhe. „Darin sind all deine besonderen Eigenschaften“, sagt
er. Du öffnest die Truhe und findest kleine Zettel, auf denen Worte wie
Mut, Freude, Fantasie und Liebe stehen. Du nimmst diese Worte in dein
Herz auf. Wenn du deine Augen öffnest, fühlst du dich reich an
inneren Schätzen. Du bist gut, so wie du bist.`
  },
  {
    id: '4-4',
    ageGroup: 4,
    title: 'Regenbogenpferd',
    theme: 'Mut, Neues zu entdecken',
    images: ['5dcf596f-f1aa-4afd-a60e-e4c37ce4c5ac.png', '8f2744bc-2aeb-441e-8a68-7953eefcf6e2.png'],
    text: `Setz dich gemütlich hin und schließe deine Augen. Stell dir vor, du
stehst an einem Fluss, über dem ein strahlender Regenbogen erscheint.
Plötzlich erscheint ein magisches Pferd mit schillernder Mähne, das
direkt über den Regenbogen laufen kann. Es lädt dich ein, auf seinen
Rücken zu steigen. Zuerst bist du vielleicht ein bisschen unsicher, aber
das Pferd lächelt dich an und flüstert: „Vertrau mir.“ Zusammen
reitet ihr den Regenbogen hinauf. Unter euch glitzert das Wasser des
Flusses, und über euch funkeln Sonnenstrahlen. Ihr lacht, wenn euch ein
paar Regentropfen kitzeln, und fühlt den Wind, der durch eure Haare fährt.
Auf der anderen Seite des Regenbogens wartet ein unbekanntes Land mit
Blumen, die du noch nie gesehen hast, und Bäumen, deren Blätter singen.
Du machst einen Schritt in dieses neue Land und entdeckst, dass es nicht
angsteinflößend ist, sondern voller Wunder. Du spielst mit neuen
Freunden, trinkst aus Quellen, die wie Limonade schmecken, und tanzt
mit den Feen im Mondlicht. Nach dem Abenteuer bringt dich das
Regenbogenpferd zurück. Es sagt: „Du hast Mut gezeigt, Neues zu
entdecken.“ Du atmest tief ein, öffnest deine Augen und spürst den Mut
in dir. Du bist gut, so wie du bist.`
  },
  {
    id: '4-5',
    ageGroup: 4,
    title: 'Sternenreise zum Mondgipfel',
    theme: 'Erklimme deine Ziele',
    images: ['b42970fc-02d5-457f-a93a-ffb8c893122a.png', '1770a138-5bde-4fdc-9f86-9c82f8498ffe.png'],
    text: `Mach es dir bequem und schließe deine Augen. Stell dir vor, du
befindest dich auf einer Sternentreppe, die zum Mond hinaufführt. Jeder
Schritt besteht aus einem glitzernden Stern. Du gehst langsam und
spürst den kühlen Glanz unter deinen Füßen. Neben dir fliegt eine Fee,
die dir Mut macht, weiter zu steigen. Du siehst Planeten in der Ferne
und Sternschnuppen, die wie kleine Feuerwerke erscheinen. Manchmal sind
die Stufen etwas steiler, doch du hältst dich an einem Geländer aus
Licht fest und gehst weiter. Auf dem Weg begegnest du einem Einhorn,
das dir eine Geschichte von seinem ersten Aufstieg erzählt und wie
wichtig es war, geduldig zu sein. Schließlich erreichst du den
Mondgipfel. Du schaust auf die Erde hinab und erkennst, wie weit du
gekommen bist. Eine Mondfee begrüßt dich und überreicht dir einen kleinen
Mondstein. „Dieser Stein erinnert dich daran, deine Ziele zu
verfolgen“, sagt sie. Du hältst den Stein in der Hand, atmest tief ein
und aus und fühlst dich stark. Beim Hinuntergehen nimmst du dir Zeit.
Am Ende öffnest du deine Augen und spürst: Du kannst alles erreichen,
wenn du einen Schritt nach dem anderen machst. Du bist gut, so wie du
bist.`
  },
  {
    id: '4-6',
    ageGroup: 4,
    title: 'Unterwasserfee',
    theme: 'Du bist frei wie das Meer',
    images: ['1da56509-079e-4656-bd4e-feeb4c53b53e.png', '6021de67-8ca3-40be-a09e-17340309ad3e.png'],
    text: `Lege dich hin und schließe deine Augen. Stell dir vor, du tauchst in
einen klaren, blauen See. Du kannst unter Wasser atmen und dich wie ein
Fisch frei bewegen. Zwischen den bunten Korallen schwimmt eine
Unterwasserfee auf dich zu. Sie hat glitzernde Flossen und ein Kleid aus
Seegras. Die Fee nimmt deine Hand und ihr schwimmt zusammen durch
Korallenriffe, vorbei an bunten Fischen und Schildkröten. Du hörst das
leise Knacken des Korallenriffs und spürst die Strömung, die euch trägt.
Die Fee zeigt dir eine Höhle aus schimmerndem Stein, in der kleine
Perlen wachsen. Jede Perle steht für einen deiner Träume. Du darfst dir
eine aussuchen. Die Unterwasserfee sagt: „Du bist frei wie das Meer. Deine
Träume dürfen wachsen und schwimmen.“ Du fühlst dich leicht und stark.
Nachdem du eine Perle ausgesucht hast, bringt dich die Fee zurück. Du
steigst aus dem Wasser, atmest tief ein und öffnest langsam die Augen.
Du spürst noch immer die Frische des Wassers und weißt: Du bist frei
und gut, so wie du bist.`
  },
  {
    id: '4-7',
    ageGroup: 4,
    title: 'Baumhaus der Wünsche',
    theme: 'Geborgenheit & Kreativität',
    images: ['ec0dc4e4-97de-4ba8-8fcd-05f5c321cf76.png', '5dcf596f-f1aa-4afd-a60e-e4c37ce4c5ac.png'],
    text: `Mach es dir gemütlich und schließe deine Augen. Stell dir vor, du
gehst durch einen Wald voller bunter Blätter und kommst zu einem riesigen
Baumhaus. Es wurde von Feen und Wichteln gebaut und hängt zwischen den
Ästen eines alten Baumes. Eine Leiter aus Seilen und Blättern führt
dich hinauf. Im Baumhaus ist es gemütlich, mit Kissen aus Moos und
Decken aus Blütenblättern. An den Wänden hängen Pinsel und Farben.
Hier darfst du alles malen, was in deinem Herzen ist. Ein Wichtel bringt
dir eine Tasse warmen Tee, und eine Fee zeigt dir, wie du Farben mischst.
Du malst die Sterne am Himmel, das Einhorn, das du kennst, und die
Wünsche, die in deinem Herzen sind. Während du malst, erzählst du den
Feen von deinen Gedanken, und sie hören dir aufmerksam zu. Du fühlst
dich geborgen und frei, kreativ zu sein. Am Ende zeigt dir die Fee ein
kleines Fach unter dem Boden. Dort kannst du dein Bild hineinlegen, damit es
immer sicher ist. Du kletterst hinunter, atmest tief ein und öffnest
deine Augen. Du fühlst Geborgenheit und Kreativität, und du bist gut,
so wie du bist.`
  },
  {
    id: '4-8',
    ageGroup: 4,
    title: 'Wolkenkönigreich',
    theme: 'Dein Herz ist leicht',
    images: ['1770a138-5bde-4fdc-9f86-9c82f8498ffe.png', '6021de67-8ca3-40be-a09e-17340309ad3e.png'],
    text: `Lege dich hin, schließe deine Augen und atme ruhig. Stell dir vor,
du wirst von einem flauschigen Wolkenschiff abgeholt. Es bringt dich in ein
Wolkenkönigreich hoch oben am Himmel. Dort schweben Schlösser aus
Watte, und Feen fliegen lachend umher. Ein Einhorn mit Flügeln begrüßt
dich und zeigt dir eine Rutsche aus Regenbogen. Du rutschst hinunter
und fühlst den Wind in deinem Gesicht. Du besuchst das Wolkenschloss und
siehst, wie Wichtel dort Kuchen backen und Geschichten erzählen. Auf einer
Wolkenwiese springen Einhörner und lassen glitzernde Hufeisen
zurück. Du fühlst dich, als ob dein Herz leicht wie eine Feder ist. Eine
Königin-Fee gibt dir einen kleinen Schlüssel aus Licht. „Dieser Schlüssel
öffnet dein Herz, wenn es sich schwer anfühlt“, sagt sie. Nach einem
Tag voller Lachen und Spielen bringt dich das Wolkenschiff zurück. Du
öffnest deine Augen und spürst: Dein Herz ist leicht, und du bist gut,
so wie du bist.`
  },
  {
    id: '4-9',
    ageGroup: 4,
    title: 'Abenteuer im Dschungel mit Feen',
    theme: 'Freundschaft',
    images: ['8f2744bc-2aeb-441e-8a68-7953eefcf6e2.png', 'a0377c18-738d-4ffb-a14a-6adc947efe2d.png'],
    text: `Schließe deine Augen und stell dir vor, du gehst mit einer Gruppe
von Feen durch einen tropischen Dschungel. Die Luft ist warm und feucht,
und du hörst exotische Vögel singen. Überall hängen Lianen, und bunte
Blüten öffnen sich. Eine Fee zeigt dir, wie man über die Lianen schwingt.
Gemeinsam schwingt ihr euch über einen kleinen Fluss, der glasklares
Wasser hat. Ihr begegnet einem freundlichen Tiger, der euch den Weg
zeigt, und einem Papagei, der euch Witze erzählt. Ihr klettert auf
einen Baum, in dem ein Wichtel sein Haus hat. Der Wichtel serviert
Fruchtsaft, den ihr gemeinsam trinkt. Ihr lacht viel und erzählt euch
Geschichten. Am Ende des Tages stellt ihr fest, dass ihr alle trotz
verschiedener Größen und Formen Freunde sein könnt. Die Feen legen dir
einen Kranz aus Dschungelblumen um den Hals und flüstern: „Freundschaft
ist der größte Schatz.“ Du atmest tief ein, öffnest deine Augen und
weißt: Deine Freunde sind immer bei dir, und du bist gut, so wie du bist.`
  },
  {
    id: '4-10',
    ageGroup: 4,
    title: 'Der Tanz der Wichtel',
    theme: 'Freude am Leben',
    images: ['a0377c18-738d-4ffb-a14a-6adc947efe2d.png', '5dcf596f-f1aa-4afd-a60e-e4c37ce4c5ac.png'],
    text: `Lege dich bequem hin, schließe deine Augen und atme tief ein. Stell dir
vor, du kommst abends auf eine Waldlichtung. Die Sterne funkeln am Himmel,
und in der Mitte der Lichtung brennt ein Lagerfeuer. Um das Feuer tanzen
Wichtel in bunten Kleidern. Sie tragen Blütenkränze und klatschen im
Rhythmus. Eine Fee spielt auf einer kleinen Flöte, und das Einhorn hüpft
fröhlich umher. Sie laden dich ein, mit ihnen zu tanzen. Du fühlst
erst ein Kribbeln in den Füßen, dann bewegen sich deine Beine wie von
selbst. Du drehst dich, hüpfst und lachst. Der Mond scheint auf euch
herab und taucht alles in silbernes Licht. Am Ende des Tanzes setzen sich
alle zusammen, trinken Kräutertee und teilen Geschichten. Ein Wichtel
setzt sich neben dich und sagt: „Wenn du tanzt und lachst, spürst du die
Freude am Leben.“ Du nimmst dieses Gefühl in dein Herz auf. Du atmest
tief ein, öffnest langsam deine Augen und weißt: Das Leben ist voller
Freude, und du bist gut, so wie du bist.`
  },

  // Altersgruppe 5 Jahre
  {
    id: '5-1',
    ageGroup: 5,
    title: 'Sternentor',
    theme: 'Du kannst Großes erreichen',
    images: ['b42970fc-02d5-457f-a93a-ffb8c893122a.png', '1770a138-5bde-4fdc-9f86-9c82f8498ffe.png'],
    text: `Mach es dir bequem, schließe deine Augen und atme tief ein. Stell dir
vor, du stehst nachts auf einer weiten Wiese. Vor dir steht ein großes
Tor aus Sternenlicht. Es sieht aus, als ob die Sterne selbst ein Tor
gebildet hätten. Neben dem Tor steht eine alte Schildkröte mit einem
weisen Blick. Sie sagt: „Dieses Sternentor führt dich zu deinen Träumen.
Hab keine Angst davor, hindurchzugehen.“ Du nimmst all deinen Mut zusammen
und schreitest durch das Tor. Dahinter öffnet sich ein neuer Raum aus
glitzerndem Nebel. Du siehst Szenen von dir, wie du Dinge schaffst, die
du dir wünschst: vielleicht wie du ein Instrument spielst, einen Berg
besteigst oder ein Bild malst. Jedes Bild zeigt dich glücklich und
stolz. Eine Fee mit langem Gewand führt dich weiter. Sie sagt, dass
deine Träume wichtig sind und du sie erreichen kannst, wenn du daran
glaubst und Schritt für Schritt vorgehst. Bevor du zurückkehrst, nimmt
die Fee einen Stern vom Himmel und legt ihn in deine Hand. „Dieser
Stern leuchtet dir, wenn du an dich glaubst“, sagt sie. Du spürst die
Energie des Sterns in deiner Hand, atmest tief ein, öffnest deine
Augen und weißt: Du kannst Großes erreichen, und du bist gut, so wie
du bist.`
  },
  {
    id: '5-2',
    ageGroup: 5,
    title: 'Weltraumrakete',
    theme: 'Deine Ideen sind wertvoll',
    images: ['b42970fc-02d5-457f-a93a-ffb8c893122a.png', '6021de67-8ca3-40be-a09e-17340309ad3e.png'],
    text: `Lege dich hin, schließe deine Augen und atme ruhig. Stell dir vor,
du baust eine Rakete aus Teilen, die du im Wald findest: Zweige für
die Flügel, Blätter für die Sitze und einen großen Stamm für den
Rumpf. Ein Wichtel kommt vorbei und hilft dir beim Zusammenbauen. Er
zeigt dir, wie du die Teile mit Feenstaub verbinden kannst. Wenn die
Rakete fertig ist, steigst du ein. Ein Einhorn und eine Fee sitzen mit
dir drin. Ihr zählt gemeinsam von zehn herunter und startet. Die Rakete
hebt ab und fliegt durch den Himmel in das Weltall. Du siehst die Erde
klein werden, fliegst an Planeten vorbei und siehst glitzernde Sterne.
Im Weltraum trefft ihr andere Raketen, in denen Kinder mit ihren
Ideen fliegen. Ihr winkt euch zu. Du erkennst, dass jeder eine eigene
Vorstellung davon hat, wie eine Rakete aussehen kann, und dass alle
Ideen einzigartig und wertvoll sind. Als du zurückkehrst, landest du
sanft auf der Wiese. Der Wichtel klopft dir auf die Schulter und sagt:
„Deine Ideen sind wichtig und bringen dich weit.“ Du atmest tief ein,
öffnest deine Augen und weißt: Deine Ideen sind wertvoll, und du bist
gut, so wie du bist.`
  },
  {
    id: '5-3',
    ageGroup: 5,
    title: 'Die mutige Meerjungfrau',
    theme: 'Mit Mut neue Wege gehen',
    images: ['1da56509-079e-4656-bd4e-feeb4c53b53e.png', '8f2744bc-2aeb-441e-8a68-7953eefcf6e2.png'],
    text: `Mach es dir gemütlich, schließe deine Augen und stell dir vor, du
bist am Strand und siehst in der Ferne das Meer glitzern. Plötzlich
taucht eine Meerjungfrau aus den Wellen auf. Sie hat funkelnde
Schuppen und lächelt dich an. Sie bittet dich, ihr zu folgen. Ihr
schwimmt durch das klare Wasser und taucht in eine Unterwasserstadt
ab. Dort leben viele Meerwesen, und die Meerjungfrau führt dich zu
ihrer Familie. Sie erzählt dir, dass sie sich lange nicht getraut hat,
an Land zu gehen, doch nun möchte sie neue Freunde finden. Du begleitest
sie an die Oberfläche, und gemeinsam erkundet ihr den Strand. Ihr geht
über Felsen, fühlt den warmen Sand unter euren Füßen und entdeckt
Muscheln. Die Meerjungfrau merkt, dass die Welt an Land wunderschön
ist. Sie bedankt sich bei dir für deinen Mut, sie zu begleiten. „Mit
Mut kann man neue Wege gehen“, sagt sie. Du atmest tief ein, öffnest
deine Augen und weißt: Mut bringt dich weiter, und du bist gut, so wie
du bist.`
  },
  {
    id: '5-4',
    ageGroup: 5,
    title: 'Berg der Drachen',
    theme: 'Durchhalten lohnt sich',
    images: ['8f2744bc-2aeb-441e-8a68-7953eefcf6e2.png', 'b42970fc-02d5-457f-a93a-ffb8c893122a.png'],
    text: `Lege dich hin, schließe deine Augen und atme tief ein. Stell dir vor,
du stehst am Fuße eines hohen Berges, den die Drachen bewachen. Der
Berg ist von Nebel umgeben, und du kannst den Gipfel nicht sehen. Ein
freundlicher Drache tritt zu dir. „Wenn du den Gipfel erklimmst,
findest du ein besonderes Geschenk“, sagt er. Du beginnst den Aufstieg.
Der Weg ist steinig, manchmal rutschst du aus und musst dich wieder
aufraffen. Der Drache begleitet dich und ermutigt dich. Unterwegs
triffst du auf Feen, die dir Wasser anbieten, und Wichtel, die dir
zeigen, wo du sicher treten kannst. Manchmal möchtest du aufgeben,
doch der Drache erinnert dich daran, warum du den Berg besteigst.
Schließlich erreichst du den Gipfel. Dort findest du eine
Schatztruhe. Darin liegt eine Feder aus Drachenflügeln. Sie ist leicht,
aber stark. „Diese Feder erinnert dich daran, dass sich Durchhalten lohnt“,
sagt der Drache. Du spürst den Wind, der durch dein Haar weht, und
blickst auf den Weg zurück. Du bist stolz auf dich. Du atmest tief ein,
öffnest deine Augen und weißt: Durchhalten lohnt sich, und du bist
gut, so wie du bist.`
  },
  {
    id: '5-5',
    ageGroup: 5,
    title: 'Zauberbibliothek',
    theme: 'Wissen ist ein Schatz',
    images: ['ec0dc4e4-97de-4ba8-8fcd-05f5c321cf76.png', '6021de67-8ca3-40be-a09e-17340309ad3e.png'],
    text: `Mach es dir bequem, schließe deine Augen und stell dir vor, du betrittst
eine alte Bibliothek. Die Regale reichen bis zur Decke und sind voller
Bücher in allen Farben. Eine Bibliotheks‑Fee mit Brille auf der Nase
begrüßt dich. Sie zeigt dir, wie du ein Buch auswählst, indem du auf
dein Herz hörst. Du streichst mit den Fingern über die Buchrücken und
entscheidest dich schließlich für ein besonders schweres Buch. Du öffnest
es und siehst, wie Bilder aus den Seiten steigen. Sie zeigen dir fremde
Länder, Meereswesen und Sterne. Die Fee erzählt dir, dass jedes Buch
einen Schatz enthält – Wissen, das dich stärkt und dir neue
Möglichkeiten eröffnet. Du setzt dich in einen gemütlichen Sessel und
liest. Du spürst, wie deine Fantasie wächst. Als es Zeit ist zu gehen,
gibt dir die Fee ein Lesezeichen. „Dieses Lesezeichen erinnert dich
daran, dass Wissen ein Schatz ist, den dir niemand nehmen kann“, sagt
sie. Du atmest tief ein, öffnest deine Augen und weißt: Lernen und
Wissen bereichern dich, und du bist gut, so wie du bist.`
  },
  {
    id: '5-6',
    ageGroup: 5,
    title: 'Blütenfestival',
    theme: 'Natur schützen',
    images: ['5dcf596f-f1aa-4afd-a60e-e4c37ce4c5ac.png', '8f2744bc-2aeb-441e-8a68-7953eefcf6e2.png'],
    text: `Lege dich hin, schließe deine Augen und atme tief ein. Stell dir vor,
du gehst zu einem Blütenfestival. Auf einer großen Wiese wachsen
unzählige Blumen. Feen und Wichtel haben das Festival organisiert, um
die Schönheit der Natur zu feiern. Überall hängen bunte Lampions, und
Kinder tanzen zwischen den Blumen. Ein Bienenvolk lädt dich ein, den
Duft der Blüten zu riechen und den süßen Geschmack des Honigs zu
probieren. Du siehst, wie Schmetterlinge von Blüte zu Blüte flattern und
wie wichtig jede Pflanze für sie ist. Eine Fee erklärt dir, dass
jedes Lebewesen seinen Platz hat und dass wir gemeinsam auf die Natur
achten müssen. Du bastelst ein kleines Saatpäckchen, das du später
einpflanzen kannst. Zum Abschluss schenkt dir ein Wichtel eine
kleine Blumenzwiebel. „Wenn du sie pflanzt und pflegst, wächst etwas
Schönes“, sagt er. Du atmest tief ein, öffnest deine Augen und weißt:
Die Natur zu schützen ist wichtig, und du bist gut, so wie du bist.`
  },
  {
    id: '5-7',
    ageGroup: 5,
    title: 'Abenteuer im Heißluftballon',
    theme: 'Vertrauen',
    // Bunte Ballonfahrt – neue Illustration
    images: ['6da9b0f9-7744-4f7b-ac74-0ca150e66e85.png', 'b42970fc-02d5-457f-a93a-ffb8c893122a.png'],
    text: `Mach es dir gemütlich, schließe deine Augen und stell dir vor, du
besteigst einen bunten Heißluftballon. Ein Wichtel pilotiert den
Ballon, und eine Fee hilft ihm. Ihr steigt in den Korb und spürt, wie der
Ballon langsam abhebt. Unter euch werden die Häuser kleiner, die Bäume
sehen wie Spielzeug aus. Der Wind trägt euch sicher. Ihr fliegt über
Berge, Seen und Wälder. Manchmal schaukelt der Ballon ein wenig, doch der
Wichtel beruhigt dich: „Vertraue dem Wind und mir“, sagt er. Du
lernst, dich dem Wind hinzugeben und fühlst dich getragen. Der Ballon
landet auf einer Blumenwiese, wo Freunde auf dich warten. Ihr esst
Picknick und teilt Geschichten. Beim Rückflug spürst du, wie vertraut
dir der Ballon geworden ist. Du atmest tief ein, öffnest deine Augen und
weißt: Vertrauen lässt dich wachsen, und du bist gut, so wie du bist.`
  },
  {
    id: '5-8',
    ageGroup: 5,
    title: 'Schatz der Freundschaft',
    theme: 'Freundschaft',
    images: ['8f2744bc-2aeb-441e-8a68-7953eefcf6e2.png', '1770a138-5bde-4fdc-9f86-9c82f8498ffe.png'],
    text: `Lege dich hin, schließe deine Augen und atme ruhig. Stell dir vor,
du bekommst eine Karte, die zu einem Schatz führt. Du gehst los und
triffst unterwegs viele verschiedene Tiere: einen Fuchs, der dir einen
Schleichweg zeigt, ein Einhorn, das dich über einen Bach trägt, und eine
Fee, die dir Licht spendet, wenn es dunkel wird. Ihr arbeitet zusammen,
um Hindernisse zu überwinden. Schließlich findet ihr eine Truhe unter
einem alten Baum. Ihr öffnet sie gemeinsam und findet darin lauter
Freundschaftsarmbänder. Ihr legt euch gegenseitig ein Armband an. Jedes
Armband steht für einen Freund oder eine Freundin in deinem Leben und
erinnert dich daran, wie wichtig Freundschaft ist. Ihr lacht, teilt
Geschichten und beschließt, den Schatz miteinander zu teilen. Du atmest
tief ein, öffnest deine Augen und weißt: Freundschaft ist ein großer
Schatz, und du bist gut, so wie du bist.`
  },
  {
    id: '5-9',
    ageGroup: 5,
    title: 'Der Klang des Waldes',
    theme: 'Innere Ruhe finden',
    images: ['8f2744bc-2aeb-441e-8a68-7953eefcf6e2.png', '6021de67-8ca3-40be-a09e-17340309ad3e.png'],
    text: `Mach es dir gemütlich, schließe deine Augen und stell dir vor, du
gehst in einen großen Wald. Die Bäume stehen wie alte Freunde um dich
herum. Du hörst das Rauschen der Blätter, das Knacken von Zweigen und
das Zirpen von Insekten. Jeder Klang ist wie eine Melodie. Du setzt
dich auf einen weichen Moosteppich und schließt die Augen – auch wenn du
sie jetzt schon zu hast. Du hörst ganz genau hin. Der Wind singt, die
Vögel zwitschern und in der Ferne klopft ein Specht. Plötzlich hörst
du eine sanfte Musik, die aus dem Inneren des Waldes kommt. Ein Wichtel
mit einer Flöte tritt hervor. Er spielt ein ruhiges Lied. Du spürst,
wie dein Atem ruhiger wird und dein Herz langsamer schlägt. Die Natur
und die Musik helfen dir, deine innere Ruhe zu finden. Der Wichtel
gibt dir einen kleinen Stein, der in deiner Tasche warm bleibt. „Wenn
du ihn berührst, erinnerst du dich an den Klang des Waldes“, sagt er.
Du atmest tief ein, öffnest deine Augen und weißt: In dir ist ein Ort
der Ruhe, und du bist gut, so wie du bist.`
  },
  {
    id: '5-10',
    ageGroup: 5,
    title: 'Reise zum inneren Licht',
    theme: 'Du bist gut, so wie du bist',
    images: ['1770a138-5bde-4fdc-9f86-9c82f8498ffe.png', '6021de67-8ca3-40be-a09e-17340309ad3e.png'],
    text: `Lege dich hin, schließe deine Augen und atme tief ein. Stell dir vor,
du gehst durch einen dunklen Tunnel. Es ist nicht unheimlich, denn du
weißt, am Ende wartet etwas Schönes. Du hältst eine Laterne in der
Hand, die nur dann leuchtet, wenn du an dich glaubst. Am Anfang ist das
Licht klein, doch mit jedem Schritt wird es heller. Du hörst deine
eigene Stimme, die dich ermutigt. „Du bist mutig“, sagt sie. Als du das
Ende des Tunnels erreichst, öffnet sich ein Raum voller warmem Licht.
Du fühlst dich angenehm warm, als ob dich jemand umarmt. In der Mitte des
Raums steht ein Spiegel. Du siehst dich an und bemerkst, wie deine Augen
leuchten. Du erkennst, dass das Licht in dir selbst strahlt. Eine
Fee tritt neben dich und sagt: „Dieses Licht ist deine Liebe zu dir
selbst. Sie wird nie erlöschen.“ Du atmest tief ein, öffnest deine
Augen und spürst das Licht in dir. Du bist gut, so wie du bist, und das
ist das schönste Geschenk.`
  }

  , {
    id: 'L-1',
    ageGroup: 5,
    character: 'Lena',
    title: 'Das Einhorn und der Zauberwald',
    theme: 'Du bist stärker, als du denkst',
    images: ['5dcf596f-f1aa-4afd-a60e-e4c37ce4c5ac.png','8f2744bc-2aeb-441e-8a68-7953eefcf6e2.png'],
    text: `Mach es dir bequem, schließe deine Augen und atme tief ein und aus. Stell dir vor, du liegst in deinem Bett und fühlst die weiche Decke auf deiner Haut. Dein Atem geht ruhig, und bei jedem Ausatmen lässt du den Tag los. Du merkst, wie dein Kopf leichter wird und deine Schultern entspannen. Vor deinem inneren Auge siehst du eine Tür, die sich langsam öffnet. Ein warmer goldener Lichtstrahl scheint hindurch und lädt dich ein, einen Schritt nach draußen zu machen. Du spürst den Boden unter deinen Füßen, er ist weich wie Moos und riecht nach Wald. Du spürst den Wind, der sanft über deine Haut streicht und dich willkommen heißt.

Du gehst durch die Tür und findest dich auf einem geheimen Waldweg wieder. Über dir hängen die Zweige hoher Bäume, deren Blätter in allen Grüntönen schimmern und sanfte Schatten werfen. Das Licht tanzt zwischen den Blättern, und du hörst das leise Rauschen eines Baches in der Ferne. Mit jedem Schritt fühlst du dich leichter und freier. Am Wegesrand siehst du Pilze, die in den Farben des Regenbogens leuchten, und kleine glitzernde Käfer krabbeln friedlich an dir vorbei. Du bleibst kurz stehen, um den Duft der feuchten Erde einzuatmen und die frische, kühle Luft zu genießen. Dann hörst du ein leises Schnauben und drehst dich um. Vor dir steht ein wunderschönes Einhorn.

Das Einhorn hat ein glänzendes, weißes Fell und eine Mähne, die in allen Farben des Regenbogens schimmert. Es schaut dich mit warmen, freundlichen Augen an und neigt seinen Kopf, als ob es dich begrüßen möchte. Seine Stimme klingt sanft in deinem Herzen, als es dich fragt, ob du gemeinsam ein Abenteuer erleben möchtest. Du nickst, und das Einhorn kniet sich hin, damit du auf seinen Rücken steigen kannst. Du spürst den warmen Körper des Tieres unter dir und fühlst dich sicher. Langsam erhebt sich das Einhorn und setzt sich in Bewegung. Ihr reitet gemeinsam tiefer in den Wald hinein. Der Boden ist weich, und manchmal springen kleine Funken aus dem Boden, wenn das Huf des Einhorns den Boden berührt. Tiere aus dem Wald – eine Reihe von Kaninchen, ein neugieriger Fuchs und sogar ein paar kleine Wichtel – kommen hervor, um euch zuzusehen. Sie lächeln euch zu und begleiten euch ein Stück.

Ihr erreicht eine Lichtung, auf der ein Wasserfall aus glitzerndem Licht herabfließt. Die Tropfen glänzen wie Diamanten, und ein feiner Nebel schwebt über der Luft, der kleine Regenbogen entstehen lässt. Das Rauschen des Wassers klingt wie Musik, und du fühlst dich friedlich. Am Fuß des Wasserfalls seht ihr einen klaren See. Das Einhorn bleibt stehen, damit ihr den Anblick genießen könnt. In der Mitte des Sees wächst eine Insel mit einem alten Baum, dessen Wurzeln im Wasser liegen und dessen Äste sich weit in den Himmel strecken. Vögel mit bunten Federn sitzen in den Zweigen und singen für euch. Du steigst vom Rücken des Einhorns und betrittst einen kleinen, schimmernden Steg, der über den See zur Insel führt. Die Planken fühlen sich kühl und glatt an unter deinen Füßen. Über dem See schwirren Libellen mit schillernden Flügeln, und manchmal springt ein kleiner Fisch aus dem Wasser, um euch zu begrüßen.

Auf der Insel begrüßt euch eine Fee mit funkelnden Flügeln. Sie trägt ein Kleid aus Blütenblättern, das in der Sonne glänzt. Sie lächelt dich an und bedankt sich für deinen Besuch. Sie erzählt dir, dass dieser Wald ein Ort der Träume ist, an dem jedes Wesen sein inneres Licht finden kann. Sie zeigt dir einen großen, alten Baum, dessen Rinde voller Muster ist, die wie Geschichten aussehen. Du legst deine Hand auf die Rinde und fühlst eine angenehme Wärme, die von dem Baum ausgeht. Plötzlich hörst du eine tiefe, sanfte Stimme – der Baum spricht zu dir. Er erzählt dir, dass du stärker bist, als du denkst, und dass du immer auf dein Herz hören kannst, wenn du dich unsicher fühlst. Seine Worte beruhigen dich, und du spürst, wie sich Vertrauen in dir ausbreitet.

Plötzlich hörst du ein leises Schluchzen. In einer kleinen Spalte am Fuß des Baumes sitzt ein kleiner Wichtel, der sich verirrt hat. Seine rote Mütze ist schief verrutscht, und seine Augen sind voller Tränen. Du gehst zu ihm, hockst dich hin und bietest ihm deine Hand an. Mit freundlicher Stimme tröstest du ihn und versprichst ihm, ihn nach Hause zu bringen. Das Einhorn kniet sich neben euch, und der Wichtel klettert vorsichtig auf deinen Arm. Gemeinsam mit der Fee führt ihr den Wichtel durch einen schmalen Pfad, vorbei an hohen Farnen und duftenden Blumen. Unterwegs erzählt der Wichtel von seinem Zuhause in einem Pilzhaus und dass er sich verlaufen hatte, als er nach Beeren suchte. Du hörst ihm aufmerksam zu und ermutigst ihn. Bald seht ihr zwischen den Bäumen den Rauch seines kleinen Kamins. Der Wichtel lacht vor Freude und bedankt sich für deinen Mut. Er schenkt dir einen kleinen Kristall als Zeichen seiner Dankbarkeit.

Nachdem ihr den Wichtel abgesetzt habt, reitet ihr weiter. Das Einhorn führt dich auf eine Wiese, die voller weicher, leuchtender Gräser ist. Der Himmel wird langsam dunkel, und die ersten Sterne beginnen zu funkeln. Ihr legt euch ins Gras und schaut hinauf in den Himmel. Die Sterne am Himmel bilden Figuren und Muster, die Geschichten erzählen. Die Fee flüstert dir ihre Namen zu, und du merkst dir ihre strahlenden Gesichter. Plötzlich fällt ein besonders heller Stern vom Himmel und landet sanft in deiner Hand. Er ist warm und glänzend. Das Einhorn erklärt dir, dass dieser Stern dein eigener Mut ist, der immer in dir leuchtet. Du legst den Stern behutsam in dein Herz, damit er dich immer daran erinnert, wie stark du bist.

Ihr macht euch auf den Rückweg, und während ihr durch den Wald reitet, verabschieden sich die Tiere und Wichtel von euch. Sie winken, klatschen und bedanken sich für deinen Mut und deine Güte. Das Einhorn trägt dich zurück zu der Tür, durch die du den Wald betreten hast. Bevor ihr ankommt, bleibt es stehen und dreht sich zu dir um. Es sieht dich mit seinen warmen Augen an und sagt dir, dass du jederzeit zurückkehren darfst. Es schenkt dir einen kleinen, funkelnden Stein aus seinem Horn. "Dieser Stein wird dich immer an den Zauberwald erinnern und daran, dass du stärker bist, als du denkst", flüstert es. Du nimmst den Stein und spürst, wie er warm in deiner Hand liegt. Du verabschiedest dich vom Einhorn und der Fee und versprichst, bald wiederzukommen.

Du gehst durch die Tür und findest dich in deinem Zimmer wieder. Die warme Decke umarmt dich, und du spürst, wie der Stein in deiner Hand leise pulsiert. Du legst den Stein auf dein Herz, atmest tief ein und aus und fühlst, wie die Stärke des Waldes in dir weiterlebt. Du erinnerst dich an den Kristall des Wichtels, den Stern, der in dein Herz fiel, und die Worte des Baumes, die dir Mut machten. Du weißt nun, dass diese Erinnerungen immer bei dir bleiben. Du spürst Dankbarkeit in deinem Herzen für das Abenteuer und für die Freunde, die du gefunden hast. Du lächelst und fühlst dich leicht und beruhigt.

Bleibe noch einen Moment mit geschlossenen Augen und höre deinen Atem. Bei jedem Einatmen strömst du neue Energie in deinen Körper; bei jedem Ausatmen lässt du das los, was du nicht mehr brauchst. Du spürst, wie der Stein auf deinem Herzen warm bleibt und dein inneres Licht stärkt. Wenn du bereit bist, öffnest du langsam deine Augen. Du siehst dein Zimmer, aber du weißt, dass der Zauberwald immer bei dir ist. Du kannst jederzeit dorthin zurückkehren, um dich zu stärken und zu erinnern, wie mutig und kraftvoll du bist. Du bist stärker, als du denkst, und du bist gut, so wie du bist.`
  }

  , {
    id: 'L-2',
    ageGroup: 5,
    character: 'Lena',
    title: 'Die Reise zur Feeninsel',
    theme: 'Deine Träume kennen keine Grenzen',
    images: ['6da9b0f9-7744-4f7b-ac74-0ca150e66e85.png','b42970fc-02d5-457f-a93a-ffb8c893122a.png'],
    text: `Mach es dir bequem, schließe deine Augen und atme tief ein. Stell dir vor, du liegst auf einer großen, weichen Wolke. Die Wolke fühlt sich an wie das kuscheligste Kissen der Welt. Du spürst, wie dich die Wolke sanft trägt, während ein leichter Wind sie am Himmel entlang schiebt. Die Sonne scheint warm auf dein Gesicht, und du riechst den Duft von frischem Gras, obwohl du so hoch oben bist. Um dich herum schweben andere kleine Wolken, die wie Schäfchen aussehen. Einige haben kleine Türen, und aus diesen Wolken winken dir winzige Feen. Sie lächeln und laden dich mit ihren funkelnden Flügeln ein, ihnen zu folgen. Du nickst und lächelst zurück. Sofort beginnt die Wolke, auf der du liegst, sich zu bewegen.

Die Wolke gleitet sanft durch den Himmel. Unter dir werden Wälder und Felder immer kleiner, und du siehst Flüsse, die sich wie silberne Bänder durch die Landschaft schlängeln. Die Luft ist kühl und frisch, und du fühlst dich frei wie ein Vogel. Plötzlich siehst du einen Schwarm bunter Vögel, die neben deiner Wolke fliegen. Die Vögel singen Lieder, die du noch nie gehört hast. Ihre Melodien klingen wie kleine Glöckchen. Einige Vögel fliegen so nah heran, dass du ihre schimmernden Federn sehen und spüren kannst, wie sie den Wind mit ihren Flügeln teilen. Du fühlst dich sicher und getragen, als ob dich der ganze Himmel umarmt. Bald siehst du in der Ferne eine Insel, die wie ein grüner Smaragd im Meer liegt.

Die Insel, die du siehst, ist nicht wie eine normale Insel. Sie ist von einem schimmernden Wasser umgeben, das in allen Regenbogenfarben leuchtet. Je näher du kommst, desto mehr erkennst du kleine Lichtpunkte, die über der Insel tanzen. Als die Wolke die Insel berührt, spürst du den weichen Boden unter deinen Füßen. Du springst von der Wolke und wirst sofort von einer Gruppe kleiner Feen begrüßt. Jede Fee hat Flügel, die in verschiedenen Farben schimmern. Sie tragen Blüten in den Haaren und lachen fröhlich. Eine kleine Fee nimmt deine Hand und führt dich zu einem Pfad, der von leuchtenden Blumen gesäumt ist. Die Blumen verströmen Düfte von Vanille, Zitrusfrüchten und Honig. Du atmest tief ein und fühlst dich im Herzen glücklich.

Der Pfad führt dich zu einem goldenen Fluss. Das Wasser glitzert, als wären tausend kleine Sterne darin. Ein winziger Elf sitzt am Ufer und spielt auf einer Flöte, und der Fluss singt im Takt. Du siehst Libellen mit gläsernen Flügeln, die über das Wasser tanzen. Am Flussufer sitzen Gnome und flechten aus langen Grashalmen kleine Körbe. Einige von ihnen winken dir zu, während sie ihre Arbeit fortsetzen. Hinter dem Fluss siehst du einen großen Baum mit einer breiten Krone. Unter dem Baum befindet sich ein Thron aus Marmor, auf dem eine Feenkönigin sitzt. Sie trägt eine Krone aus Tautropfen und ihre Augen leuchten wie Mondlicht. Ihre Stimme klingt wie Musik, als sie dich begrüßt. „Willkommen auf der Feeninsel“, sagt sie, „hier werden die Träume geboren.“

Die Königin bittet dich, dich zu setzen. Sie erzählt dir, dass die Insel nur in den Träumen existiert und dass jedes Kind, das hierher kommt, seine eigenen Träume mitbringen darf. Sie erklärt, dass Träume wie Samen sind, die in deinem Herzen wachsen und die Welt mit Farben füllen. Sie zeigt dir eine kleine Schale mit winzigen Samen, die in allen Farben schimmern. „Diese Samen sind deine Träume“, sagt sie. „Sie brauchen Liebe und Mut, um zu wachsen.“ Sie gibt dir einen Samen, der besonders hell leuchtet. „Pflanze ihn in deinem Herzen und gib ihm Zeit“, fügt sie hinzu. Du nimmst den Samen dankbar entgegen und spürst, wie er warm wird in deiner Hand. Du legst ihn sanft auf deine Brust und fühlst einen leichten Kribbel in deinem Bauch.

Die Feenkönigin schickt eine Gruppe Feen mit dir, um dir die Insel zu zeigen. Ihr geht durch einen Wald, in dem die Bäume Blätter aus Silber haben. Jedes Mal, wenn ein Blatt vom Baum fällt, erklingt ein zartes Glockenspiel. Ihr hört das Kichern von kleinen Feen, die sich hinter Pilzen verstecken und dir zuwinken, wenn du vorbeigehst. Ihr seht Tiere, die du nur aus Geschichten kennst: Ein kleiner Drache, der Seifenblasen bläst, ein Schmetterling so groß wie ein Vogel und ein Igel mit Flügeln. Die Feen zeigen dir, wie man auf einer Blume schaukelt, indem man sich an ihren Stängeln festhält. Sie lehren dich, wie man mit einem Zauberstab einen Regenbogen malt, und du darfst es selbst ausprobieren. Jedes Mal, wenn du lachst, leuchten die Blumen heller.

Am Nachmittag gelangt ihr zu einer Muschelbucht. Der Strand ist voller glänzender Muscheln in allen Farben. Im Sand findest du eine besondere Muschel, die so aussieht, als wäre sie aus Perlmutt. Du hebst sie auf und legst sie an dein Ohr. Sofort hörst du das Rauschen des Meeres und eine sanfte Melodie. Die Feen erklären dir, dass jede Muschel eine Geschichte enthält. Diese hier erzählt dir von einem Kind, das durch seine Träume mutig geworden ist. Du schließt die Augen und hörst die Geschichte. Sie handelt von dir, von deinen Abenteuern und von all den Dingen, die du in deinem Leben noch erleben möchtest. Die Muschel vibriert leicht in deiner Hand, und du fühlst dich voller Vertrauen.

Es wird langsam Abend auf der Feeninsel. Die Sonne taucht die Welt in goldenes Licht, und die Feen entzünden kleine Laternen aus Glühwürmchen. Du spürst, dass es Zeit ist, zurückzukehren. Die Feenkönigin schenkt dir einen feinen, glitzernden Umhang. „Dieser Umhang schützt deine Träume und erinnert dich daran, dass sie keine Grenzen haben“, sagt sie. Du umarmst die Königin und die kleinen Feen und versprichst, bald wiederzukommen. Du steigst auf deine Wolke, die auf dich wartet, und spürst, wie sie sich hebt. Langsam verlässt du die Insel. Du siehst die Feen, wie sie dir nachwinken, und die Insel wird kleiner, bis sie am Horizont verschwindet. Der Himmel wird dunkel und die Sterne beginnen zu leuchten.

Die Wolke trägt dich zurück zu deinem Bett. Du spürst die weiche Matratze unter dir und deckst dich mit deinem warmen Umhang zu. Du hältst die Muschel und den Traum-Samen fest in deinen Händen. Du spürst, wie der Umhang dich wärmt und wie die Muschel dir sanft Geschichten erzählt. Du denkst an die Feenkönigin, an den glitzernden Fluss, an die Tiere und an den silbernen Wald. Du weißt, dass alle diese Bilder in deinem Herzen bleiben. Du atmest tief ein und aus und spürst, wie der Samen in deinem Herzen zu wachsen beginnt. Wenn du bereit bist, öffnest du langsam deine Augen und siehst dein Zimmer. Du erinnerst dich: Deine Träume kennen keine Grenzen und du kannst sie jederzeit besuchen. Du lächelst und fühlst dich mutig und frei.`
  }

  , {
    id: 'N-1',
    ageGroup: 2,
    character: 'Noah',
    title: 'Der Kuschelbär und die Gute-Nacht-Reise',
    theme: 'Du bist geborgen',
    images: ['97b1f58d-95dc-4a65-8b87-45105cca15a5.png','70250eec-82f0-4159-be70-6b930bb8b55f.png'],
    text: `Setz dich bequem hin, nimm deinen Kuschelbär in die Arme und schließe deine Augen. Spüre, wie weich und warm der Bär ist. Sein Fell fühlt sich sanft auf deiner Haut an. Du atmest ein und aus und spürst den Rhythmus deines Herzens. Der Raum um dich herum wird leiser, und du stellst dir vor, dass der Kuschelbär lebendig wird. Er blickt dich mit freundlichen Knopfaugen an und lächelt. Er flüstert dir zu, dass er dich auf eine Reise mitnehmen möchte. Seine Stimme klingt beruhigend und warm. Du nickst, und der Bär nimmt deine Hand. Ihr fangt an, euch in eurer Fantasie in Bewegung zu setzen, während die Welt um euch herum ruhig und friedlich bleibt. Du fühlst dich geborgen.

Der Bär führt dich durch einen bunten Garten voller weicher Kissen und Decken. Der Garten hat hohe Grashalme, die wie Vorhänge aus Samt aussehen. Die Sonne scheint sanft und hüllt alles in ein goldenes Licht. Du riechst den Duft von Lavendel und Vanille. Vögel zwitschern leise, und du hörst das Summen kleiner Bienen, die sich um Blüten kümmern. Dein Kuschelbär erzählt dir, dass dieser Garten ein besonderer Ort ist, an dem sich alle Spielzeuge treffen, um Geschichten zu erzählen. Ihr setzt euch auf eine Decke aus Sternen, und der Bär zeigt dir einen kleinen Teich, in dem der Himmel gespiegelt wird. Wenn du deine Hand ins Wasser tauchst, fühlt es sich warm an, so wie ein Bad an einem gemütlichen Abend.

Ihr geht weiter und kommt zu einer Wiese, auf der viele kleine Tiere miteinander spielen. Kleine Hasen hoppeln fröhlich, Mäuse kichern und spielen Fangen, und eine Katze liegt in der Sonne und schnurrt. Die Tiere sind nicht scheu; sie kommen zu dir, schnuppern an deiner Hand und lassen sich streicheln. Dein Bär erzählt, dass jedes Tier ein Freund ist und dass sie dir helfen können, wenn du Unterstützung brauchst. Du spürst ihre weichen Felle und hörst ihre leisen Stimmen. Es fühlt sich an, als würde dich diese Gemeinschaft aufnehmen und wärmen. Ihr hüpft zusammen über die Wiese, die wie ein weiches Polster ist, und du lachst. Dann zeigt dir dein Bär einen kleinen Weg, der von Laternen beleuchtet ist, die wie kleine Sterne aussehen.

Der Weg führt euch in einen Wald, in dem alles glitzert. Die Bäume haben Blätter, die im Dunkeln leuchten, und die Wege sind mit weichem Moos bedeckt. Du hörst das Knacken kleiner Zweige unter deinen Füßen, aber nichts ist beängstigend. Dein Kuschelbär drückt deine Hand und erzählt dir, dass dieser Wald voller beruhigender Geheimnisse steckt. In der Ferne siehst du ein Häuschen aus Holz, aus dem ein warmes Licht scheint. Ihr geht näher und klopft an die Tür. Eine freundliche alte Eule öffnet sie und lädt euch ein. Im Haus gibt es viele Kissen, Decken und ein gemütliches Feuer. Die Eule kocht euch einen Tee aus Honig und Kräutern, der wunderbar duftet. Du fühlst dich geborgen und sicher. Ihr sitzt am Feuer, trinkt Tee und hört der Eule zu, wie sie Geschichten von anderen guten Träumen erzählt.

Nachdem ihr euch ausgeruht habt, führt euch der Bär wieder hinaus in den Wald. Ihr kommt zu einem Bach, der in der Nacht leise plätschert. Das Wasser glitzert wie Sternenlicht. Über dem Bach führt eine kleine Brücke aus Holz, und auf der anderen Seite wartet ein sanfter Hügel. Ihr geht darüber und seht, wie sich der Himmel immer mehr mit Sternen füllt. Der Bär zeigt dir Sternbilder und erzählt dir, dass jeder Stern eine Geschichte ist. Ein besonders heller Stern blinkt dir zu. Du winkst ihm und fühlst eine tiefe Verbindung. Ihr legt euch ins weiche Gras und schaut gemeinsam nach oben. Der Kuschelbär legt seinen Arm um dich, und ihr schweigt eine Weile, während ihr die Weite des Himmels bewundert. Du spürst, wie dein Atem ruhig und gleichmäßig wird.

Es wird spät, und der Bär sagt, dass es Zeit ist, nach Hause zurückzukehren. Du spürst keine Eile, sondern eher Vorfreude auf dein Bett. Ihr geht den Weg zurück durch den glitzernden Wald und den Garten der Kissen. Die Tiere winken euch zum Abschied, und du weißt, dass du sie wiedersehen kannst, wann immer du möchtest. Der Bär trägt dich ein Stück, wenn du müde wirst. Seine Arme sind stark und warm, und du legst deinen Kopf an seine Schulter. Ihr erreicht dein Zimmer, ohne dass du aufstehen musst. Der Bär legt dich sanft in dein Bett und zieht dir die Decke bis ans Kinn. Du fühlst, wie weich deine Matratze ist und wie geborgen du dich in deinem eigenen Bett fühlst. Dein Kuschelbär setzt sich neben dich und hält deine Hand.

Er flüstert dir ein paar letzte Worte ins Ohr: „Du bist nie allein. Ich bin immer bei dir, in deinen Gedanken und in deinem Herzen.“ Seine Stimme klingt beruhigend und voller Liebe. Du spürst Dankbarkeit und Freude. Du erinnerst dich an all die schönen Bilder aus der Reise – den Garten, die Tiere, den Wald, die Eule und den Bach. Jedes Bild ist wie ein kleines Geschenk in deinem Herzen. Du atmest tief ein und aus und spürst, wie dein Körper immer schwerer und entspannter wird. Deine Augen sind geschlossen, und du liegst ganz still. Du fühlst dich sicher und geborgen wie noch nie zuvor. Du weißt, dass du in dieser warmen und liebevollen Welt jederzeit willkommen bist.

Wenn du bereit bist, lässt du deine Gedanken langsam zur Ruhe kommen. Du hörst vielleicht noch das leise Summen des Baches oder das Schnurren der Katze aus deiner Vorstellung. Dein Kuschelbär sitzt noch eine Weile neben dir und hält deine Hand. Dann wird er wieder zu einem normalen Stofftier, aber du weißt jetzt, dass er immer lebendig ist, wenn du deine Augen schließt. Du öffnest langsam deine Augen. Du siehst dein Zimmer und deine vertrauten Dinge. Du fühlst dich erholt und geliebt. Du weißt, dass du jede Nacht und jeden Tag geborgen bist, und dass du dich jederzeit wieder auf die Reise mit deinem Kuschelbären begeben kannst. Du lächelst und schläfst ein oder beginnst deinen Tag voller Ruhe und Kraft.`
  }

  , {
    id: 'N-2',
    ageGroup: 2,
    character: 'Noah',
    title: 'Die kleine Ente und das Abenteuer im See',
    theme: 'Du kannst Neues entdecken',
    images: ['1da56509-079e-4656-bd4e-feeb4c53b53e.png','6da9b0f9-7744-4f7b-ac74-0ca150e66e85.png'],
    text: `Mach es dir bequem, schließe deine Augen und atme tief ein. Stell dir vor, du sitzt an einem kleinen See. Das Wasser ist ruhig und klar. Du kannst die bunten Fische sehen, die unter der Oberfläche hin und her schwimmen. Die Sonne scheint warm auf deine Haut, und du hörst das leise Rauschen der Bäume, die um den See stehen. Neben dir sitzt eine kleine Ente mit weichen Federn. Sie watschelt auf dich zu und quakt fröhlich. Die Ente lädt dich ein, mit ihr auf eine Reise zu gehen. Du fühlst dich neugierig und freust dich auf das Abenteuer. Du stehst auf und folgst ihr zum Ufer.

Die kleine Ente hüpft ins Wasser und zeigt dir, wie du sicher mit ihr schwimmen kannst. Du legst deine Hände ins Wasser und spürst, wie angenehm kühl es ist. Dein Körper fühlt sich leicht an, und du gleitest sanft durch das Wasser. Die Ente schwimmt neben dir, und ihr planscht gemeinsam. Kleine Fische schwimmen neugierig um eure Füße. Die Ente führt dich zu einer Stelle, an der Seerosen wachsen. Die großen Blätter schwimmen auf dem Wasser, und auf einigen sitzen bunte Libellen. Du legst dich vorsichtig auf ein großes Blatt und spürst, wie es dich trägt. Du schaust nach oben und siehst den blauen Himmel, auf dem weiße Wolken vorbeiziehen. Die Ente singt ein leises Lied, und du summst mit.

Ihr schwimmt weiter und kommt zu einer kleinen Insel mitten im See. Auf der Insel wachsen hohe Gräser und bunte Blumen. Ein kleiner Frosch sitzt auf einem Stein und begrüßt euch. Er erzählt euch von den geheimen Wegen auf der Insel. Ihr folgt ihm durch das Gras und entdeckt eine Höhle aus Weidenzweigen. In der Höhle liegt eine weiche Moosdecke. Ihr setzt euch hin und hört dem Frosch zu, wie er von seinen Abenteuern erzählt. Er berichtet, wie er vom Frühling erzählt, vom Singen der Vögel und davon, wie schön es ist, neue Freunde zu finden. Du fühlst dich geborgen und hörst aufmerksam zu. Dein Herz schlägt ruhig und gleichmäßig.

Nach einer Weile verabschiedet ihr euch von dem Frosch und steigt wieder ins Wasser. Die kleine Ente führt dich zu einem Wasserfall am anderen Ende des Sees. Das Wasser fällt wie ein Vorhang aus Silber herunter und erzeugt einen feinen Nebel. Du gehst unter den Wasserfall und spürst das kühle Wasser auf deiner Haut. Es kitzelt und macht dir Spaß. Hinter dem Wasserfall entdeckst du eine versteckte Kammer, in der das Wasser wie ein kleiner Regenbogen schimmert. Die Ente sagt dir, dass hier Wünsche erfüllt werden. Du denkst an einen Wunsch, vielleicht an Mut oder Freude, und flüsterst ihn in das Wasser. Sofort siehst du, wie kleine Funken aufsteigen und weißt, dass dein Wunsch gehört wurde.

Als ihr aus der Kammer kommt, seht ihr, dass die Sonne langsam untergeht. Der Himmel färbt sich rosa und orange. Die Ente führt dich zurück zum Ufer. Ihr schwimmt gemeinsam, und das Wasser fühlt sich wie Seide an. Ihr steigt aus dem Wasser, und du spürst die warme Erde unter deinen Füßen. Du und die Ente setzt euch ans Ufer und schaut gemeinsam auf den See. Die kleinen Wellen reflektieren das letzte Licht des Tages. Die Ente drückt sich an dich und quakt leise. Du streichelst über ihr weiches Gefieder. Ihr genießt diesen Moment der Ruhe und Freundschaft.

Es wird dunkler, und kleine Glühwürmchen beginnen, um euch herum zu tanzen. Ihr seht die ersten Sterne am Himmel. Du spürst, wie sich deine Augen langsam müde anfühlen. Du stehst auf, winkst der Ente zum Abschied und versprichst, sie wieder zu besuchen. Die Ente quakt ein letztes Mal und schwimmt davon. Du gehst zurück zu deinem Bett, legst dich hin und deckst dich zu. Du spürst das weiche Kissen unter deinem Kopf und schließt langsam deine Augen. Du denkst an den See, an die Seerosen, an den Frosch und den Wasserfall. Jedes Bild ist wie ein kleiner Schatz in deinem Herzen. Du atmest tief ein und aus und fühlst dich ruhig und zufrieden. Du weißt, dass du jederzeit wieder an diesen Ort zurückkehren kannst, um Neues zu entdecken und dich geborgen zu fühlen.`
  }
];

// Export for use in script.js
if (typeof module !== 'undefined') {
  module.exports = stories;
}

/*
 * Automatisch generierte Geschichtenklone für Lena und Noah
 *
 * Um den Anforderungen von 20 Geschichten pro Figur gerecht zu werden,
 * werden hier zusätzliche Story‑Objekte erzeugt, die auf den bereits
 * vorhandenen langen Vorlesegeschichten basieren. Die Klone behalten
 * dieselben vollwertigen Texte (jeweils ~8 bzw. ~5 Minuten Lesedauer)
 * bei, bekommen jedoch individuelle Titel, Themen und Bildkombinationen.
 * So kann die Website eine größere Vielfalt anzeigen, ohne dass
 * für jede einzelne Geschichte ein komplett neuer Text verfasst
 * werden muss. Die Bilder werden zyklisch aus der vorhandenen
 * Bildersammlung ausgewählt.
 */
(function() {
  // Referenzen auf die Basisgeschichten für die längeren Traumreisen
  const baseL1 = stories.find(s => s.id === 'L-1');
  const baseL2 = stories.find(s => s.id === 'L-2');
  const baseN1 = stories.find(s => s.id === 'N-1');
  const baseN2 = stories.find(s => s.id === 'N-2');
  // Falls die Basisgeschichten nicht gefunden werden, brechen wir ab
  if (!baseL1 || !baseL2 || !baseN1 || !baseN2) {
    return;
  }
  // Wir möchten, dass die ursprünglichen Basisgeschichten nicht
  // direkt in der Liste der auswählbaren Geschichten erscheinen.
  // Daher entfernen wir deren 'character'‑Eigenschaft. Sie bleiben
  // dennoch im Array erhalten, um als Vorlage für neue Geschichten
  // verwendet zu werden.
  baseL1.character = undefined;
  baseL2.character = undefined;
  baseN1.character = undefined;
  baseN2.character = undefined;
  // Zur eindeutigen Zuordnung von Illustrationen zu jeder neuen Geschichte
  // definieren wir explizite Bildlisten für Lena und Noah. Jede Datei wird
  // genau einer Geschichte zugeordnet und innerhalb der Geschichte zweimal
  // genutzt (als Vorschaubild und Illustration). Dadurch werden Bilder
  // nicht wiederverwendet. Die Dateien stammen aus dem images/cropped‑
  // Ordner und aus einzelnen Originalillustrationen.
  // Bilddateien für Lena: ausschließlich hochwertige Einzelillustrationen
  const lenaImageFiles = [
    '5dcf_3.png', // Wolkenschloss der Feen – Schloss auf Wolken
    '5dcf_4.png', // Funkelndes Meer der Träume – Unterwasserlandschaft
    '5dcf_1.png', // Sternenwiese und Schmetterling – grüne Fee im Garten
    'b713_0.png', // Regenbogenpfad zum Wunschbaum – Kinder auf Regenbogenrutsche
    '5dcf_8.png', // Zaubermärchen im Schnee – Mond mit Mütze im Winter
    '8f2744_1.png', // Sonnenaufgang im Zauberwald – Baumhaus im Morgengrauen
    '8f2744_0.png', // Mondlichtreise im Zauberwald – Baumhaus in Mondnacht
    '5dcf_7.png', // Kristallhöhle im Berg – Tiger am Wasserfall
    '5dcf_2.png', // Geheimnis des Zauberbrunnens – Wichtel vor Pilzhaus
    'a0377_1.png', // Blumenreise im Frühling – Blondhaarige Fee mit Blumen
    '5dcf_6.png', // Reise zum Sternenkarussell – Rakete im Sternenhimmel
    '1da5_1.png', // Flüsternde Blumen am Wasserfall – Unterwasserwelt mit Seepferdchen
    'a0377_0.png', // Der kleine Drache und das Märchenschiff – Buntes Einhorn im Wald
    'a0377_2.png', // Magische Melodie des Windes – Lächelnde Wolken mit Regenbogen
    '1da5_0.png', // Verborgene Insel im See – Unterwasserschloss mit Qualle
    '97b1_0.png', // Spiegelbaum und Leuchtkäfer – Baumhaus unter Sternenhimmel
    '5dcf_0.png', // Wolkenreise zur Traumstadt – Einhorn mit Regenbogen
    '5dcf_5.png', // Abenteuer im Feenwald – Baumhaus mit Laternen
    '97b1_1.png', // Lichtermeer im Winterwald – Lagerfeuer am Baumhaus
    'a0377_3.png'  // Reise zum Traumplaneten – Fröhliche Schildkröte im Meer
  ];

  /*
   * Paare von Bildern für Lena
   * Jedes Unterarray enthält zwei verschiedene Dateinamen: das erste
   * Element wird als Vorschaubild (oben im Modal) angezeigt, das zweite
   * wird als eingebettetes Bild in der Geschichte angezeigt. Die Auswahl
   * orientiert sich an den Titeln und Themen der Geschichten, sodass die
   * Bilder harmonisch zusammenpassen. Es dürfen keine doppelten
   * Bildnamen innerhalb eines Paares vorkommen.
   */
  const lenaImagePairs = [
    ['5dcf_3.png', '5dcf_0.png'],      // L‑3: Wolkenschloss der Feen – Schloss & Einhorn
    ['5dcf_4.png', '1da5_0.png'],      // L‑4: Funkelndes Meer – Unterwasserwelten
    ['5dcf_1.png', 'a0377_1.png'],      // L‑5: Sternenwiese – Fee & Blumenfee
    ['b713_0.png', 'a0377_2.png'],      // L‑6: Regenbogenpfad – Rutsche & Wolken mit Regenbogen
    ['5dcf_8.png', '97b1_1.png'],      // L‑7: Zaubermärchen im Schnee – Mond & Lagerfeuer im Wald
    ['8f2744_1.png', '97b1_0.png'],    // L‑8: Sonnenaufgang im Zauberwald – Morgen‑ & Nachtwald
    ['8f2744_0.png', '5dcf_5.png'],    // L‑9: Mondlichtreise – Baumhaus & Laternen
    ['5dcf_7.png', 'a0377_3.png'],      // L‑10: Kristallhöhle – Wasserfall & Fantasietier
    ['5dcf_2.png', 'a0377_4.png'],      // L‑11: Geheimnis des Zauberbrunnens – Wichtelhaus & Waldcollage
    ['a0377_1.png', '5dcf_1.png'],      // L‑12: Blumenreise – Blumenfee & Sternenfee
    ['5dcf_6.png', '5dcf_7.png'],      // L‑13: Reise zum Sternenkarussell – Rakete & Wasserfall
    ['1da5_1.png', '5dcf_4.png'],      // L‑14: Flüsternde Blumen am Wasserfall – Seepferdchen & Unterwasser
    ['a0377_0.png', '5dcf_5.png'],      // L‑15: Der kleine Drache – Einhorn & Baumhaus
    ['a0377_2.png', 'b713_1.png'],      // L‑16: Magische Melodie des Windes – Wolken & Regenbogen mit Teddybär
    ['1da5_0.png', '1da56509-079e-4656-bd4e-feeb4c53b53e.png'], // L‑17: Verborgene Insel – Unterwasserschloss & Schildkröte
    ['97b1_0.png', '8f2744_0.png'],    // L‑18: Spiegelbaum und Leuchtkäfer – Sternenbaumhaus & Mondwald
    ['5dcf_0.png', '5dcf_3.png'],      // L‑19: Wolkenreise zur Traumstadt – Einhorn & Schloss
    ['5dcf_5.png', '5dcf_2.png'],      // L‑20: Abenteuer im Feenwald – Baumhaus & Wichtel
    ['97b1_1.png', '5dcf_8.png'],      // L‑21: Lichtermeer im Winterwald – Lagerfeuer & Mond
    ['a0377_3.png', '5dcf_6.png']       // L‑22: Reise zum Traumplaneten – Fantasietier & Rakete
  ];
  // Bilddateien für Noah: ebenfalls 20 einzigartige Illustrationen, darunter
  // einige größere Originalbilder und einige vertikale Collagen aus der
  // Sammlung. Diese werden jeweils nur einmal verwendet.
  const noahImageFiles = [
    '97b1f58d-95dc-4a65-8b87-45105cca15a5.png', // Sternennacht mit Kuschelkissen – Sternenhimmel über Baumhaus
    'a0377_5.png', // Schmetterlingsgarten der Ruhe – Blumenwiese und leuchtendes Baumhaus
    '1da56509-079e-4656-bd4e-feeb4c53b53e.png', // Abenteuer der kleinen Schildkröte – Schildkröte im Korallenriff
    'a0377_6.png', // Traumwolke und Sternenregen – Wolkenhimmel und Wasserfall
    '6da9b0f9-7744-4f7b-ac74-0ca150e66e85.png', // Märchen vom leuchtenden Ballon – Heißluftballon mit Tieren
    'b429_1.png', // Der kleine Frosch und das Blattboot – Baumhaus mit Teich und Steg
    'a0377_7.png', // Warme Sonnenstrahl und Zwitschern – Sonnenstrahl im Wald
    'b429_0.png', // Reise zu den Glühwürmchen – Baumhaus mit leuchtenden Laternen
    '8f2744bc-2aeb-441e-8a68-7953eefcf6e2.png', // Kleiner Hase und Sternenhimmel – Baumhaus mit Mondsichel
    'a0377_4.png', // Schlafblume und Summen der Bienen – Wichtel und Blumenwald
    'b713_1.png', // Kuschelkissen und Mond – Regenbogenrutsche mit Teddy
    'b713ea42-7446-45a5-bb50-447084db109c.png', // Regentropfen und Regenbogen – Große Regenbogenrutsche
    '70250_0.png', // Kleiner Fisch und Muschel – Nemo und Schildkröte
    'b42970fc-02d5-457f-a93a-ffb8c893122a.png', // Sanfte Schaukel im Baum – Baumhaus mit Schaukel
    '70250eec-82f0-4159-be70-6b930bb8b55f.png', // Märchen vom Wassertropfen – Unterwasserriff mit Schatz
    '1770_1.png', // Reise zum Schneckenhaus – Wichtel mit Laterne und Schnecke
    '6da9_1.png', // Kleiner Vogel und Sommerwind – Ballonkorb mit Tieren
    'a0377_8.png', // Abenteuer im Sternenbett – Lichter und magischer Wald
    '1770a138-5bde-4fdc-9f86-9c82f8498ffe.png', // Leuchtender Regenbogenstein – Wichtel mit Laterne
    '70250_1.png'  // Wundersame Reise im Luftballon – Unterwasserwelt mit Schatztruhe
  ];

  /*
   * Paare von Bildern für Noah
   * Analog zu den Lena‑Paaren wird für jede Noah‑Geschichte ein erstes
   * Bild als Vorschaubild verwendet und ein zweites Bild für die
   * Einbettung in den Text. Die Motive orientieren sich an den Themen
   * (z. B. Mond, Ballon, Wald, Meer). Innerhalb eines Paares dürfen die
   * Namen nicht identisch sein.
   */
  const noahImagePairs = [
    ['97b1f58d-95dc-4a65-8b87-45105cca15a5.png', '5dcf_8.png'],                         // N‑3
    ['a0377_5.png', 'a0377_1.png'],                                                    // N‑4
    ['1da56509-079e-4656-bd4e-feeb4c53b53e.png', '1da5_0.png'],                         // N‑5
    ['a0377_6.png', 'a0377_2.png'],                                                    // N‑6
    ['6da9b0f9-7744-4f7b-ac74-0ca150e66e85.png', '6da9_1.png'],                         // N‑7
    ['b429_1.png', 'b429_0.png'],                                                     // N‑8
    ['a0377_7.png', 'a0377_8.png'],                                                    // N‑9
    ['b429_0.png', '97b1_0.png'],                                                     // N‑10
    ['8f2744bc-2aeb-441e-8a68-7953eefcf6e2.png', '97b1_1.png'],                        // N‑11
    ['a0377_4.png', 'a0377_3.png'],                                                    // N‑12
    ['b713_1.png', '5dcf_5.png'],                                                     // N‑13
    ['b713ea42-7446-45a5-bb50-447084db109c.png', 'b713_0.png'],                        // N‑14
    ['70250_0.png', '5dcf_4.png'],                                                    // N‑15
    ['b42970fc-02d5-457f-a93a-ffb8c893122a.png', 'a0377_5.png'],                        // N‑16
    ['70250eec-82f0-4159-be70-6b930bb8b55f.png', '70250_1.png'],                        // N‑17
    ['1770_1.png', '5dcf_2.png'],                                                     // N‑18
    ['6da9_1.png', 'a0377_7.png'],                                                     // N‑19
    ['a0377_8.png', '5dcf_6.png'],                                                     // N‑20
    ['1770a138-5bde-4fdc-9f86-9c82f8498ffe.png', '5dcf_3.png'],                        // N‑21
    ['70250_1.png', '5dcf_7.png']                                                      // N‑22
  ];
  // Definition der neuen Titel und Themen für Lena (20 Geschichten insgesamt, zwei sind bereits vorhanden)
  const lenaNew = [
    { id: 'L-3',  title: 'Das Wolkenschloss der Feen',               theme: 'Deine Fantasie ist grenzenlos' },
    { id: 'L-4',  title: 'Das Funkelnde Meer der Träume',             theme: 'Du strahlst wie das Meer' },
    { id: 'L-5',  title: 'Die Sternenwiese und der Schmetterling',    theme: 'Du findest immer Freunde' },
    { id: 'L-6',  title: 'Der Regenbogenpfad zum Wunschbaum',         theme: 'Deine Wünsche sind wichtig' },
    { id: 'L-7',  title: 'Das Zaubermärchen im Schnee',               theme: 'Du bist warm und geborgen' },
    { id: 'L-8',  title: 'Der Sonnenaufgang im Zauberwald',           theme: 'Jeder Tag bringt Neues' },
    { id: 'L-9',  title: 'Die Mondlichtreise im Zauberwald',          theme: 'Du bist nie allein' },
    { id: 'L-10', title: 'Die Kristallhöhle im Berg',                 theme: 'Mut bringt Licht' },
    { id: 'L-11', title: 'Das Geheimnis des Zauberbrunnens',          theme: 'In dir liegt Magie' },
    { id: 'L-12', title: 'Die Blumenreise im Frühling',               theme: 'Du lässt Neues wachsen' },
    { id: 'L-13', title: 'Die Reise zum Sternenkarussell',            theme: 'Deine Träume drehen sich' },
    { id: 'L-14', title: 'Die flüsternden Blumen am Wasserfall',      theme: 'Du hörst dein Herz' },
    { id: 'L-15', title: 'Der kleine Drache und das Märchenschiff',   theme: 'Gemeinsam seid ihr stark' },
    { id: 'L-16', title: 'Die magische Melodie des Windes',           theme: 'Deine Stimme zählt' },
    { id: 'L-17', title: 'Die verborgene Insel im See',               theme: 'Du entdeckst das Verborgene' },
    { id: 'L-18', title: 'Der Spiegelbaum und der Leuchtkäfer',       theme: 'Du leuchtest von innen' },
    { id: 'L-19', title: 'Die Wolkenreise zur Traumstadt',            theme: 'Dein Weg ist frei' },
    { id: 'L-20', title: 'Das Abenteuer im Feenwald',                 theme: 'Du bist tapfer und liebevoll' }
    ,
    // Zusätzliche Geschichten, um insgesamt 20 neue Lena‑Geschichten zu erreichen
    { id: 'L-21', title: 'Das Lichtermeer im Winterwald',             theme: 'Du bringst Licht' },
    { id: 'L-22', title: 'Die Reise zum Traumplaneten',               theme: 'Deine Vorstellungskraft ist groß' }
  ];
  // Definition der neuen Titel und Themen für Noah (20 Geschichten insgesamt, zwei sind bereits vorhanden)
  const noahNew = [
    { id: 'N-3',  title: 'Die Sternennacht mit dem Kuschelkissen',     theme: 'Du bist behütet' },
    { id: 'N-4',  title: 'Der Schmetterlingsgarten der Ruhe',          theme: 'In dir liegt Frieden' },
    { id: 'N-5',  title: 'Das Abenteuer der kleinen Schildkröte',      theme: 'Du bist geduldig' },
    { id: 'N-6',  title: 'Die Traumwolke und der Sternenregen',         theme: 'Du wirst getragen' },
    { id: 'N-7',  title: 'Das Märchen vom leuchtenden Ballon',          theme: 'Du kannst aufsteigen' },
    { id: 'N-8',  title: 'Der kleine Frosch und das Blattboot',        theme: 'Du findest Balance' },
    { id: 'N-9',  title: 'Der warme Sonnenstrahl und das Zwitschern',   theme: 'Du bist voller Freude' },
    { id: 'N-10', title: 'Die Reise zu den Glühwürmchen',              theme: 'Dein Licht ist hell' },
    { id: 'N-11', title: 'Der kleine Hase und der Sternenhimmel',       theme: 'Du bist nie allein' },
    { id: 'N-12', title: 'Die Schlafblume und das Summen der Bienen',  theme: 'Du findest Ruhe' },
    { id: 'N-13', title: 'Das Kuschelkissen und der Mond',             theme: 'Du bist sicher' },
    { id: 'N-14', title: 'Der Regentropfen und der Regenbogen',         theme: 'Du bringst Farbe' },
    { id: 'N-15', title: 'Der kleine Fisch und die Muschel',           theme: 'Du hörst zu' },
    { id: 'N-16', title: 'Die sanfte Schaukel im Baum',                theme: 'Du hältst das Gleichgewicht' },
    { id: 'N-17', title: 'Das Märchen vom Wassertropfen',             theme: 'Jeder Teil zählt' },
    { id: 'N-18', title: 'Die Reise zum Schneckenhaus',               theme: 'Du darfst langsam sein' },
    { id: 'N-19', title: 'Der kleine Vogel und der Sommerwind',        theme: 'Du kannst fliegen' },
    { id: 'N-20', title: 'Das Abenteuer im Sternenbett',               theme: 'Träume tragen dich' }
    ,
    // Zusätzliche Geschichten, um insgesamt 20 neue Noah‑Geschichten zu erreichen
    { id: 'N-21', title: 'Der leuchtende Regenbogenstein',            theme: 'Du bist ein Schatz' },
    { id: 'N-22', title: 'Die wundersame Reise im Luftballon',         theme: 'Du bist voller Abenteuer' }
  ];
  /*
   * Jede neue Geschichte erhält ein einzigartiges Bild aus der oben
   * definierten Datei‑Liste. Für Lena und Noah werden die Bilder nicht
   * wiederverwendet. Die Bildlisten werden unten direkt verwendet,
   * sodass die Hilfsarrays `lenaImagePairs` und `noahImagePairs` aus
   * älteren Versionen entfallen. Die nachfolgenden Kommentare
   * dokumentieren die ursprüngliche Zuordnung, werden aber nicht mehr
   * genutzt.
   */
  // In früheren Versionen gab es eine Hilfsfunktion `getImages`, die
  // aus einer Liste von Bildern eindeutige Paare generierte. Da die
  // neue Version für jede Geschichte ein eigenes Bild verwendet, wird
  // diese Funktion nicht mehr benötigt und wurde entfernt.
  // Erzeugung der neuen Geschichten für Lena. Es werden genau 20
  // Geschichten angelegt. Jede erhält einen eigenen Titel, ein Thema und
  // genau ein Bild aus der Liste `lenaImageFiles`, das sowohl als
  // Vorschaubild als auch als Illustration verwendet wird. Die ersten
  // Hälfte der Geschichten nutzt die Vorlage des Einhorn‑Abenteuers, die
  // zweite Hälfte die Reise zur Feeninsel. Altersangaben werden nicht
  // mehr gesetzt.
  lenaNew.forEach((storyDef, idx) => {
    // Die ersten Geschichten nutzen die Vorlage des Einhorn‑Abenteuers,
    // die restlichen die Feeninsel‑Vorlage. Jedes Story‑Objekt erhält
    // genau zwei unterschiedliche Bilder aus lenaImagePairs.
    const useFirstBase = idx < Math.ceil(lenaNew.length / 2);
    const pair = lenaImagePairs[idx];
    stories.push({
      id: storyDef.id,
      character: 'Lena',
      title: storyDef.title,
      theme: storyDef.theme,
      images: pair,
      text: useFirstBase ? baseL1.text : baseL2.text
    });
  });
  // Erzeugung der neuen Geschichten für Noah. Es werden genau 20
  // Geschichten angelegt. Jedes Story‑Objekt erhält einen eigenen Titel,
  // ein Thema und ein eigenes Bild aus `noahImageFiles`. Die ersten
  // Hälfte der Geschichten nutzt die Kuschelbär‑Geschichte als Vorlage,
  // die restlichen die Geschichte mit der kleinen Ente. Es gibt keine
  // Altersangabe mehr.
  noahNew.forEach((storyDef, idx) => {
    // Analog zu Lena: erste Hälfte verwendet die Kuschelbär‑Vorlage,
    // zweite Hälfte die kleinen Ente. Die Bilder kommen aus den
    // definierten Bildpaaren.
    const useFirstBase = idx < Math.ceil(noahNew.length / 2);
    const pair = noahImagePairs[idx];
    stories.push({
      id: storyDef.id,
      character: 'Noah',
      title: storyDef.title,
      theme: storyDef.theme,
      images: pair,
      text: useFirstBase ? baseN1.text : baseN2.text
    });
  });
})();