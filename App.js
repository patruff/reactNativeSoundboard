import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import SoundButton from './components/soundbutton';
import * as Expo from 'expo';
import { Audio } from 'expo-av';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Joe The Bachelor's {"\n"}Epic Soundboard!</Text>
        <ScrollView contentContainerStyle={styles.wrapper}>
          <SoundButton emojiName='gameover' onPress={() => this.playSound('aliens_gameover')}></SoundButton>
          <SoundButton emojiName='getaway' onPress={() => this.playSound('aliens_getaway')}></SoundButton>
          <SoundButton emojiName='yalething' onPress={() => this.playSound('americanpsycho_yalething')}></SoundButton>
          <SoundButton emojiName='backupplan' onPress={() => this.playSound('armageddon_backupplan')}></SoundButton>
          <SoundButton emojiName='nonukes' onPress={() => this.playSound('armageddon_nonukes')}></SoundButton>
          <SoundButton emojiName='solarwinds' onPress={() => this.playSound('armageddon_solarwinds')}></SoundButton>
          <SoundButton emojiName='whitehouse' onPress={() => this.playSound('armageddon_whitehouse')}></SoundButton>
          <SoundButton emojiName='kidsmarty' onPress={() => this.playSound('backtofuture2_kidsmarty')}></SoundButton>
          <SoundButton emojiName='thinkmcfly' onPress={() => this.playSound('backtofuture_thinkmcfly')}></SoundButton>
          <SoundButton emojiName='thinkfuture' onPress={() => this.playSound('batman_thinkfuture')}></SoundButton>
          <SoundButton emojiName='paiddues' onPress={() => this.playSound('bigtrouble_paiddues')}></SoundButton>
          <SoundButton emojiName='reflexes' onPress={() => this.playSound('bigtrouble_reflexes')}></SoundButton>
          <SoundButton emojiName='itsatest' onPress={() => this.playSound('bladerunner_itsatest')}></SoundButton>
          <SoundButton emojiName='seenthings' onPress={() => this.playSound('bladerunner_seenthings')}></SoundButton>
          <SoundButton emojiName='flipside' onPress={() => this.playSound('boondock_flipside')}></SoundButton>
          <SoundButton emojiName='deadcostnothing' onPress={() => this.playSound('braveheart_deadcostnothing')}></SoundButton>
          <SoundButton emojiName='urfooked' onPress={() => this.playSound('braveheart_urfooked')}></SoundButton>
          <SoundButton emojiName='cinderella' onPress={() => this.playSound('caddyshack_cinderella')}></SoundButton>
          <SoundButton emojiName='hatsoup' onPress={() => this.playSound('caddyshack_hatsoup')}></SoundButton>
          <SoundButton emojiName='steam' onPress={() => this.playSound('commando_steam')}></SoundButton>
          <SoundButton emojiName='kromlaughs' onPress={() => this.playSound('conan_kromlaughs')}></SoundButton>
          <SoundButton emojiName='lament' onPress={() => this.playSound('conan_lament')}></SoundButton>
          <SoundButton emojiName='dbzintro' onPress={() => this.playSound('dbz_dbzintro')}></SoundButton>
          <SoundButton emojiName='notyet' onPress={() => this.playSound('diehard2_notyet')}></SoundButton>
          <SoundButton emojiName='tincan' onPress={() => this.playSound('diehard2_tincan')}></SoundButton>
          <SoundButton emojiName='hardly' onPress={() => this.playSound('diehard3_hardly')}></SoundButton>
          <SoundButton emojiName='heyzues' onPress={() => this.playSound('diehard3_heyzues')}></SoundButton>
          <SoundButton emojiName='hans' onPress={() => this.playSound('diehard_hans')}></SoundButton>
          <SoundButton emojiName='hohoho' onPress={() => this.playSound('diehard_hohoho')}></SoundButton>
          <SoundButton emojiName='oops' onPress={() => this.playSound('diehard_oops')}></SoundButton>
          <SoundButton emojiName='suckafuck' onPress={() => this.playSound('donniedarko_suckafuck')}></SoundButton>
          <SoundButton emojiName='homephone' onPress={() => this.playSound('et_homephone')}></SoundButton>
          <SoundButton emojiName='ouch' onPress={() => this.playSound('et_ouch')}></SoundButton>
          <SoundButton emojiName='faceoff' onPress={() => this.playSound('faceoff_faceoff')}></SoundButton>
          <SoundButton emojiName='multipass' onPress={() => this.playSound('fifthelement_multipass')}></SoundButton>
          <SoundButton emojiName='whocares' onPress={() => this.playSound('fifthelement_whocares')}></SoundButton>
          <SoundButton emojiName='falconpunch' onPress={() => this.playSound('fzero_falconpunch')}></SoundButton>
          <SoundButton emojiName='swimback' onPress={() => this.playSound('gattaca_swimback')}></SoundButton>
          <SoundButton emojiName='whatsyournumber' onPress={() => this.playSound('gattaca_whatsyournumber')}></SoundButton>
          <SoundButton emojiName='nodick' onPress={() => this.playSound('ghostbusters_nodick')}></SoundButton>
          <SoundButton emojiName='helpus' onPress={() => this.playSound('glengarry_helpus')}></SoundButton>
          <SoundButton emojiName='leads' onPress={() => this.playSound('glengarry_leads')}></SoundButton>
          <SoundButton emojiName='pricewrong' onPress={() => this.playSound('happygilmore_pricewrong')}></SoundButton>
          <SoundButton emojiName='30seconds' onPress={() => this.playSound('heat_30seconds')}></SoundButton>
          <SoundButton emojiName='greatass' onPress={() => this.playSound('heat_greatass')}></SoundButton>
          <SoundButton emojiName='doittoitlars' onPress={() => this.playSound('heavyweights_doittoitlars')}></SoundButton>
          <SoundButton emojiName='lackofhustle' onPress={() => this.playSound('heavyweights_lackofhustle')}></SoundButton>
          <SoundButton emojiName='welcometoearth' onPress={() => this.playSound('indendenceday_welcometoearth')}></SoundButton>
          <SoundButton emojiName='chosepoorly' onPress={() => this.playSound('indianacrusade_chosepoorly')}></SoundButton>
          <SoundButton emojiName='dontdrink' onPress={() => this.playSound('indianatemple_dontdrink')}></SoundButton>
          <SoundButton emojiName='poisonyoudrank' onPress={() => this.playSound('indianatemple_poisonyoudrank')}></SoundButton>
          <SoundButton emojiName='joseph' onPress={() => this.playSound('itsawonderfullife_joseph')}></SoundButton>
          <SoundButton emojiName='mary' onPress={() => this.playSound('itsawonderfullife_mary')}></SoundButton>
          <SoundButton emojiName='whosbad' onPress={() => this.playSound('jackson_whosbad')}></SoundButton>
          <SoundButton emojiName='hellojohn' onPress={() => this.playSound('jurassicpark_hellojohn')}></SoundButton>
          <SoundButton emojiName='wehavetrex' onPress={() => this.playSound('jurassicpark_wehavetrex')}></SoundButton>
          <SoundButton emojiName='bestaround' onPress={() => this.playSound('karatekid_bestaround')}></SoundButton>
          <SoundButton emojiName='shutup' onPress={() => this.playSound('kindergartencop_shutup')}></SoundButton>
          <SoundButton emojiName='stopit' onPress={() => this.playSound('kindergartencop_stopit')}></SoundButton>
          <SoundButton emojiName='tuma' onPress={() => this.playSound('kindergartencop_tuma')}></SoundButton>
          <SoundButton emojiName='notfair' onPress={() => this.playSound('labrynth_notfair')}></SoundButton>
          <SoundButton emojiName='tobyslave' onPress={() => this.playSound('labrynth_tobyslave')}></SoundButton>
          <SoundButton emojiName='masteroflife' onPress={() => this.playSound('lastofthemohicans_masteroflife')}></SoundButton>
          <SoundButton emojiName='mogwaenglish' onPress={() => this.playSound('lastofthemohicans_mogwaenglish')}></SoundButton>
          <SoundButton emojiName='takeme' onPress={() => this.playSound('lastofthemohicans_takeme')}></SoundButton>
          <SoundButton emojiName='laugh' onPress={() => this.playSound('legacyofkain_laugh')}></SoundButton>
          <SoundButton emojiName='vaevictus' onPress={() => this.playSound('legacyofkain_vaevictus')}></SoundButton>
          <SoundButton emojiName='getitgirl' onPress={() => this.playSound('livecrew_getitgirl')}></SoundButton>
          <SoundButton emojiName='noothermaster' onPress={() => this.playSound('lordoftherings_noothermaster')}></SoundButton>
          <SoundButton emojiName='sharetheload' onPress={() => this.playSound('lordoftherings_sharetheload')}></SoundButton>
          <SoundButton emojiName='airbreathing' onPress={() => this.playSound('matrix_airbreathing')}></SoundButton>
          <SoundButton emojiName='ignorancebliss' onPress={() => this.playSound('matrix_ignorancebliss')}></SoundButton>
          <SoundButton emojiName='sowhat' onPress={() => this.playSound('metallica_sowhat')}></SoundButton>
          <SoundButton emojiName='giveitup' onPress={() => this.playSound('microsoft_giveitup')}></SoundButton>
          <SoundButton emojiName='winifyouwant' onPress={() => this.playSound('moderntalking_winifyouwant')}></SoundButton>
          <SoundButton emojiName='grace' onPress={() => this.playSound('nationallampoonchristmas_grace')}></SoundButton>
          <SoundButton emojiName='getmad' onPress={() => this.playSound('network_getmad')}></SoundButton>
          <SoundButton emojiName='lifevalue' onPress={() => this.playSound('network_lifevalue')}></SoundButton>
          <SoundButton emojiName='bastionyeah' onPress={() => this.playSound('neverendingstory_bastionyeah')}></SoundButton>
          <SoundButton emojiName='brotherskeeper' onPress={() => this.playSound('newjackcity_brotherskeeper')}></SoundButton>
          <SoundButton emojiName='shyonehorse' onPress={() => this.playSound('onceupontimewest_shyonehorse')}></SoundButton>
          <SoundButton emojiName='gottabelieve' onPress={() => this.playSound('parappa_gottabelieve')}></SoundButton>
          <SoundButton emojiName='bigirritaterouneyes' onPress={() => this.playSound('pest_bigirritaterouneyes')}></SoundButton>
          <SoundButton emojiName='children' onPress={() => this.playSound('pest_children')}></SoundButton>
          <SoundButton emojiName='deergoose' onPress={() => this.playSound('pest_deergoose')}></SoundButton>
          <SoundButton emojiName='plindatthetime' onPress={() => this.playSound('pest_plindatthetime')}></SoundButton>
          <SoundButton emojiName='telepathy' onPress={() => this.playSound('pest_telepathy')}></SoundButton>
          <SoundButton emojiName='mytown' onPress={() => this.playSound('quickandthedead_mytown')}></SoundButton>
          <SoundButton emojiName='badtimeforeveryone' onPress={() => this.playSound('rambo_badtimeforeveryone')}></SoundButton>
          <SoundButton emojiName='comebacktotheworld' onPress={() => this.playSound('rambo_comebacktotheworld')}></SoundButton>
          <SoundButton emojiName='icouldflyagunship' onPress={() => this.playSound('rambo_icouldflyagunship')}></SoundButton>
          <SoundButton emojiName='legs' onPress={() => this.playSound('rambo_legs')}></SoundButton>
          <SoundButton emojiName='longspeech' onPress={() => this.playSound('rambo_longspeech')}></SoundButton>
          <SoundButton emojiName='nobodyhelp' onPress={() => this.playSound('rambo_nobodyhelp')}></SoundButton>
          <SoundButton emojiName='nothingisover' onPress={() => this.playSound('rambo_nothingisover')}></SoundButton>
          <SoundButton emojiName='overjohnny' onPress={() => this.playSound('rambo_overjohnny')}></SoundButton>
          <SoundButton emojiName='parkingcars' onPress={() => this.playSound('rambo_parkingcars')}></SoundButton>
          <SoundButton emojiName='wasntmywar' onPress={() => this.playSound('rambo_wasntmywar')}></SoundButton>
          <SoundButton emojiName='plainzero' onPress={() => this.playSound('runningman_plainzero')}></SoundButton>
          <SoundButton emojiName='roomfist' onPress={() => this.playSound('runningman_roomfist')}></SoundButton>
          <SoundButton emojiName='outoforder' onPress={() => this.playSound('scentofwoman_outoforder')}></SoundButton>
          <SoundButton emojiName='lostgeorge' onPress={() => this.playSound('snatch_lostgeorge')}></SoundButton>
          <SoundButton emojiName='crapmegacrap' onPress={() => this.playSound('spiderman_crapmegacrap')}></SoundButton>
          <SoundButton emojiName='starfoxdog' onPress={() => this.playSound('starfox_starfoxdog')}></SoundButton>
          <SoundButton emojiName='starfoxdonkey' onPress={() => this.playSound('starfox_starfoxdonkey')}></SoundButton>
          <SoundButton emojiName='starfoxfalco' onPress={() => this.playSound('starfox_starfoxfalco')}></SoundButton>
          <SoundButton emojiName='starfoxrabbit' onPress={() => this.playSound('starfox_starfoxrabbit')}></SoundButton>
          <SoundButton emojiName='starfoxslippy' onPress={() => this.playSound('starfox_starfoxslippy')}></SoundButton>
          <SoundButton emojiName='makeitso' onPress={() => this.playSound('startrek_makeitso')}></SoundButton>
          <SoundButton emojiName='lackfaith' onPress={() => this.playSound('starwars_lackfaith')}></SoundButton>
          <SoundButton emojiName='round1' onPress={() => this.playSound('streetfighter2_round1')}></SoundButton>
          <SoundButton emojiName='knockout' onPress={() => this.playSound('streetfigther2_knockout')}></SoundButton>
          <SoundButton emojiName='boots' onPress={() => this.playSound('terminator2_boots')}></SoundButton>
          <SoundButton emojiName='fooker' onPress={() => this.playSound('terminator_fooker')}></SoundButton>
          <SoundButton emojiName='lostsai' onPress={() => this.playSound('tmnt_lostsai')}></SoundButton>
          <SoundButton emojiName='idiotstarscream' onPress={() => this.playSound('transformers_idiotstarscream')}></SoundButton>
          <SoundButton emojiName='megatronstopped' onPress={() => this.playSound('transformers_megatronstopped')}></SoundButton>
          <SoundButton emojiName='ripoutoptics' onPress={() => this.playSound('transformers_ripoutoptics')}></SoundButton>
          <SoundButton emojiName='notidentical' onPress={() => this.playSound('twins_notidentical')}></SoundButton>
          <SoundButton emojiName='yourbrother' onPress={() => this.playSound('twins_yourbrother')}></SoundButton>
          <SoundButton emojiName='badteachspeech' onPress={() => this.playSound('unclebuck_badteachspeech')}></SoundButton>
          <SoundButton emojiName='mcquestions' onPress={() => this.playSound('unclebuck_mcquestions')}></SoundButton>
          <SoundButton emojiName='remember5th' onPress={() => this.playSound('vforvendetta_remember5th')}></SoundButton>
          <SoundButton emojiName='cowbellpants' onPress={() => this.playSound('walken_cowbellpants')}></SoundButton>
          <SoundButton emojiName='whycantwebe' onPress={() => this.playSound('whycant_whycantwebe')}></SoundButton>
          <SoundButton emojiName='youlose' onPress={() => this.playSound('willywonka_youlose')}></SoundButton>
          <SoundButton emojiName='ricflair' onPress={() => this.playSound('wwf_ricflair')}></SoundButton>
          <SoundButton emojiName='empirewilllive' onPress={() => this.playSound('xmen_empirewilllive')}></SoundButton>
          <SoundButton emojiName='leadersweak' onPress={() => this.playSound('xmen_leadersweak')}></SoundButton>
          <SoundButton emojiName='nochoice' onPress={() => this.playSound('xmen_nochoice')}></SoundButton>
          <SoundButton emojiName='wtf' onPress={() => this.playSound('yoshiisland_wtf')}></SoundButton>
          <SoundButton emojiName='linksounds' onPress={() => this.playSound('zelda_linksounds')}></SoundButton>
        </ScrollView>
      </ScrollView>
    );
  }

  playSound = async (soundName) => {
    console.log(`playSound: ${soundName}`);
    const soundObject = new Audio.Sound()
    try {
      await soundObject.loadAsync(sounds[soundName]);
      await soundObject.playAsync();
    } catch (error) {
      console.log(error);
    }
  }

}

const sounds = {
  'aliens_gameover': require('./assets/aliens_gameover.mp3'),
  'aliens_getaway': require('./assets/aliens_getaway.mp3'),
  'americanpsycho_yalething': require('./assets/americanpsycho_yalething.mp3'),
  'armageddon_backupplan': require('./assets/armageddon_backupplan.mp3'),
  'armageddon_nonukes': require('./assets/armageddon_nonukes.mp3'),
  'armageddon_solarwinds': require('./assets/armageddon_solarwinds.mp3'),
  'armageddon_whitehouse': require('./assets/armageddon_whitehouse.mp3'),
  'backtofuture2_kidsmarty': require('./assets/backtofuture2_kidsmarty.mp3'),
  'backtofuture_thinkmcfly': require('./assets/backtofuture_thinkmcfly.mp3'),
  'batman_thinkfuture': require('./assets/batman_thinkfuture.mp3'),
  'bigtrouble_paiddues': require('./assets/bigtrouble_paiddues.mp3'),
  'bigtrouble_reflexes': require('./assets/bigtrouble_reflexes.mp3'),
  'bladerunner_itsatest': require('./assets/bladerunner_itsatest.mp3'),
  'bladerunner_seenthings': require('./assets/bladerunner_seenthings.mp3'),
  'boondock_flipside': require('./assets/boondock_flipside.mp3'),
  'braveheart_deadcostnothing': require('./assets/braveheart_deadcostnothing.mp3'),
  'braveheart_urfooked': require('./assets/braveheart_urfooked.mp3'),
  'caddyshack_cinderella': require('./assets/caddyshack_cinderella.mp3'),
  'caddyshack_hatsoup': require('./assets/caddyshack_hatsoup.mp3'),
  'commando_steam': require('./assets/commando_steam.mp3'),
  'conan_kromlaughs': require('./assets/conan_kromlaughs.mp3'),
  'conan_lament': require('./assets/conan_lament.mp3'),
  'dbz_dbzintro': require('./assets/dbz_dbzintro.mp3'),
  'diehard2_notyet': require('./assets/diehard2_notyet.mp3'),
  'diehard2_tincan': require('./assets/diehard2_tincan.mp3'),
  'diehard3_hardly': require('./assets/diehard3_hardly.mp3'),
  'diehard3_heyzues': require('./assets/diehard3_heyzues.mp3'),
  'diehard_hans': require('./assets/diehard_hans.mp3'),
  'diehard_hohoho': require('./assets/diehard_hohoho.mp3'),
  'diehard_oops': require('./assets/diehard_oops.mp3'),
  'donniedarko_suckafuck': require('./assets/donniedarko_suckafuck.mp3'),
  'et_homephone': require('./assets/et_homephone.mp3'),
  'et_ouch': require('./assets/et_ouch.mp3'),
  'faceoff_faceoff': require('./assets/faceoff_faceoff.mp3'),
  'fifthelement_multipass': require('./assets/fifthelement_multipass.mp3'),
  'fifthelement_whocares': require('./assets/fifthelement_whocares.mp3'),
  'fzero_falconpunch': require('./assets/fzero_falconpunch.mp3'),
  'gattaca_swimback': require('./assets/gattaca_swimback.mp3'),
  'gattaca_whatsyournumber': require('./assets/gattaca_whatsyournumber.mp3'),
  'ghostbusters_nodick': require('./assets/ghostbusters_nodick.mp3'),
  'glengarry_helpus': require('./assets/glengarry_helpus.mp3'),
  'glengarry_leads': require('./assets/glengarry_leads.mp3'),
  'happygilmore_pricewrong': require('./assets/happygilmore_pricewrong.mp3'),
  'heat_30seconds': require('./assets/heat_30seconds.mp3'),
  'heat_greatass': require('./assets/heat_greatass.mp3'),
  'heavyweights_doittoitlars': require('./assets/heavyweights_doittoitlars.mp3'),
  'heavyweights_lackofhustle': require('./assets/heavyweights_lackofhustle.mp3'),
  'indendenceday_welcometoearth': require('./assets/indendenceday_welcometoearth.mp3'),
  'indianacrusade_chosepoorly': require('./assets/indianacrusade_chosepoorly.mp3'),
  'indianatemple_dontdrink': require('./assets/indianatemple_dontdrink.mp3'),
  'indianatemple_poisonyoudrank': require('./assets/indianatemple_poisonyoudrank.mp3'),
  'itsawonderfullife_joseph': require('./assets/itsawonderfullife_joseph.mp3'),
  'itsawonderfullife_mary': require('./assets/itsawonderfullife_mary.mp3'),
  'jackson_whosbad': require('./assets/jackson_whosbad.mp3'),
  'jurassicpark_hellojohn': require('./assets/jurassicpark_hellojohn.mp3'),
  'jurassicpark_wehavetrex': require('./assets/jurassicpark_wehavetrex.mp3'),
  'karatekid_bestaround': require('./assets/karatekid_bestaround.mp3'),
  'kindergartencop_shutup': require('./assets/kindergartencop_shutup.mp3'),
  'kindergartencop_stopit': require('./assets/kindergartencop_stopit.mp3'),
  'kindergartencop_tuma': require('./assets/kindergartencop_tuma.mp3'),
  'labrynth_notfair': require('./assets/labrynth_notfair.mp3'),
  'labrynth_tobyslave': require('./assets/labrynth_tobyslave.mp3'),
  'lastofthemohicans_masteroflife': require('./assets/lastofthemohicans_masteroflife.mp3'),
  'lastofthemohicans_mogwaenglish': require('./assets/lastofthemohicans_mogwaenglish.mp3'),
  'lastofthemohicans_takeme': require('./assets/lastofthemohicans_takeme.mp3'),
  'legacyofkain_laugh': require('./assets/legacyofkain_laugh.mp3'),
  'legacyofkain_vaevictus': require('./assets/legacyofkain_vaevictus.mp3'),
  'livecrew_getitgirl': require('./assets/livecrew_getitgirl.mp3'),
  'lordoftherings_noothermaster': require('./assets/lordoftherings_noothermaster.mp3'),
  'lordoftherings_sharetheload': require('./assets/lordoftherings_sharetheload.mp3'),
  'matrix_airbreathing': require('./assets/matrix_airbreathing.mp3'),
  'matrix_ignorancebliss': require('./assets/matrix_ignorancebliss.mp3'),
  'metallica_sowhat': require('./assets/metallica_sowhat.mp3'),
  'microsoft_giveitup': require('./assets/microsoft_giveitup.mp3'),
  'moderntalking_winifyouwant': require('./assets/moderntalking_winifyouwant.mp3'),
  'nationallampoonchristmas_grace': require('./assets/nationallampoonchristmas_grace.mp3'),
  'network_getmad': require('./assets/network_getmad.mp3'),
  'network_lifevalue': require('./assets/network_lifevalue.mp3'),
  'neverendingstory_bastionyeah': require('./assets/neverendingstory_bastionyeah.mp3'),
  'newjackcity_brotherskeeper': require('./assets/newjackcity_brotherskeeper.mp3'),
  'onceupontimewest_shyonehorse': require('./assets/onceupontimewest_shyonehorse.mp3'),
  'parappa_gottabelieve': require('./assets/parappa_gottabelieve.mp3'),
  'pest_bigirritaterouneyes': require('./assets/pest_bigirritaterouneyes.mp3'),
  'pest_children': require('./assets/pest_children.mp3'),
  'pest_deergoose': require('./assets/pest_deergoose.mp3'),
  'pest_plindatthetime': require('./assets/pest_plindatthetime.mp3'),
  'pest_telepathy': require('./assets/pest_telepathy.mp3'),
  'quickandthedead_mytown': require('./assets/quickandthedead_mytown.mp3'),
  'rambo_badtimeforeveryone': require('./assets/rambo_badtimeforeveryone.mp3'),
  'rambo_comebacktotheworld': require('./assets/rambo_comebacktotheworld.mp3'),
  'rambo_icouldflyagunship': require('./assets/rambo_icouldflyagunship.mp3'),
  'rambo_legs': require('./assets/rambo_legs.mp3'),
  'rambo_longspeech': require('./assets/rambo_longspeech.mp3'),
  'rambo_nobodyhelp': require('./assets/rambo_nobodyhelp.mp3'),
  'rambo_nothingisover': require('./assets/rambo_nothingisover.mp3'),
  'rambo_overjohnny': require('./assets/rambo_overjohnny.mp3'),
  'rambo_parkingcars': require('./assets/rambo_parkingcars.mp3'),
  'rambo_wasntmywar': require('./assets/rambo_wasntmywar.mp3'),
  'runningman_plainzero': require('./assets/runningman_plainzero.mp3'),
  'runningman_roomfist': require('./assets/runningman_roomfist.mp3'),
  'scentofwoman_outoforder': require('./assets/scentofwoman_outoforder.mp3'),
  'snatch_lostgeorge': require('./assets/snatch_lostgeorge.mp3'),
  'spiderman_crapmegacrap': require('./assets/spiderman_crapmegacrap.mp3'),
  'starfox_starfoxdog': require('./assets/starfox_starfoxdog.mp3'),
  'starfox_starfoxdonkey': require('./assets/starfox_starfoxdonkey.mp3'),
  'starfox_starfoxfalco': require('./assets/starfox_starfoxfalco.mp3'),
  'starfox_starfoxrabbit': require('./assets/starfox_starfoxrabbit.mp3'),
  'starfox_starfoxslippy': require('./assets/starfox_starfoxslippy.mp3'),
  'startrek_makeitso': require('./assets/startrek_makeitso.mp3'),
  'starwars_lackfaith': require('./assets/starwars_lackfaith.mp3'),
  'streetfighter2_round1': require('./assets/streetfighter2_round1.mp3'),
  'streetfigther2_knockout': require('./assets/streetfigther2_knockout.mp3'),
  'terminator2_boots': require('./assets/terminator2_boots.mp3'),
  'terminator_fooker': require('./assets/terminator_fooker.mp3'),
  'tmnt_lostsai': require('./assets/tmnt_lostsai.mp3'),
  'transformers_idiotstarscream': require('./assets/transformers_idiotstarscream.mp3'),
  'transformers_megatronstopped': require('./assets/transformers_megatronstopped.mp3'),
  'transformers_ripoutoptics': require('./assets/transformers_ripoutoptics.mp3'),
  'twins_notidentical': require('./assets/twins_notidentical.mp3'),
  'twins_yourbrother': require('./assets/twins_yourbrother.mp3'),
  'unclebuck_badteachspeech': require('./assets/unclebuck_badteachspeech.mp3'),
  'unclebuck_mcquestions': require('./assets/unclebuck_mcquestions.mp3'),
  'vforvendetta_remember5th': require('./assets/vforvendetta_remember5th.mp3'),
  'walken_cowbellpants': require('./assets/walken_cowbellpants.mp3'),
  'whycant_whycantwebe': require('./assets/whycant_whycantwebe.mp3'),
  'willywonka_youlose': require('./assets/willywonka_youlose.mp3'),
  'wwf_ricflair': require('./assets/wwf_ricflair.mp3'),
  'xmen_empirewilllive': require('./assets/xmen_empirewilllive.mp3'),
  'xmen_leadersweak': require('./assets/xmen_leadersweak.mp3'),
  'xmen_nochoice': require('./assets/xmen_nochoice.mp3'),
  'yoshiisland_wtf': require('./assets/yoshiisland_wtf.mp3'),
  'zelda_linksounds': require('./assets/zelda_linksounds.mp3'),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#036',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    flexWrap: "wrap"
  },
  heading: {
    textAlignVertical: 'top',
    textAlign: 'center',
    color: '#ccc',
    fontSize: 30,
    marginBottom: 60,
  },
});
