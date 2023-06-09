import type { NextPage } from 'next';
import Head from 'next/head';
import { useSidebar } from '../contexts/SidebarContext';
import { useEffect } from 'react';

const Home: NextPage = () => {
  const { toggleSidebar } = useSidebar();
  useEffect(() => {
    toggleSidebar('DefaultSidebar');
  }, [toggleSidebar]);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <h1>Woodland AI factory</h1>

      <p>
        This app aims to create a virtual environment for testing strategies for
        the Root board game. It will have neither a multiplayer option nor a
        pretty interface with latest graphics and art. Rather it will allow the
        user to apply my AI or define a new one. Then a game can be played
        against the AI or multiple AIs can be asked to play against each other.
        Each game will contribute to global statistics within this app, and the
        player can view local statistics. Due to this, it may be useful to have
        the AIs play a large number of games within seconds and view averages
        based on selected strategies. Thus focus is on speed, clarity and
        efficiency, not enjoyment and beauty. For regular games, please still
        play the official physical or digital version instead, or check out the
        latest tabletop simulator mod.
      </p>

      <p>
        The AI will be fully configured by the user, no internal memory or deep
        learning will be applied at any stage as this would go against the
        purpose of human players getting better at the game. Whichever strategy
        produced any given statistic should be mostly predictable and the
        strategy that produced the result should be understandable to human
        players without seeing each turn of each game. You define the rules and
        see them applied across more games than you could ever play with your
        friends. Individual turns are wiped after each game unless proactively
        downloaded by the player, only score at the end of each turn is stored.
      </p>

      <p>
        Note that since I am a solo junior developer, getting this app to any
        usable state may take a while. The principles as outlined in this
        document should mostly remain, specific implementation can change
        drastically over time.
      </p>

      <h2>Tactical State</h2>

      <p>
        In order to limit decision tree branching, AI will work in order of
        priorities. After any mandatory upkeep steps, it will first select a
        tactical state which will determine its priorities for the given turn.
        Each state will have three focus levels from 1 to 3. Level 3 will focus
        on the selected priority to the exclusion of everything else, while a
        level 1 may still be overridden by other priorities like picking off
        unguarded cardboard. Exact behaviour will be different per faction and
        can be modified in the AI tab.
      </p>

      <p>
        AI can currently use the following tactical state profiles, in order
        from most to least aggressive:
      </p>

      <ul>
        <li>Max policing</li>
        <li>Opportunistic Aggression</li>
        <li>Neutral</li>
        <li>Max scoring</li>
        <li>Max economy</li>
      </ul>

      <p>
        Selecting the state can be defined based on specific triggers. For
        example, Max policing will be triggered when a player is pulling ahead
        in score too much and that player will be passed in as the target. With
        some factions, scoring potential will be checked as well. For example,
        if corvid has multiple plots face down currently, his potential score
        will be calculated assuming all of them will be flipped up next turn if
        able. If this brings the score above a certain threshold, corvid will be
        targeted accordingly. Multiple targets can be nominated in this step.
      </p>

      <p>
        A small amount of randomness is applied by default, so AI may decide to
        choose a different state than expected in some cases. Amount of chaos
        can be adjusted in settings from 0% to 100% randomness.
      </p>

      <h3>Maximum policing</h3>

      <p>
        In this state, AI will focus on destroying the scoring opportunities of
        the targeted player(s). By default, it will attempt to destroy any
        cardboard, but it may choose a different approach based on faction. For
        example when targeting otters, it will go after outposts if the otter
        player has any funds currently ready for scoring. Otherwise the AI may
        try to destroy any otter ball of warriors as it is the most difficult
        thing for otters to replace. Similarly, it may rule but not destroy WA
        fortresses to prevent warriors moving out of them. The higher the focus,
        the more of its own assets the AI will sacrifice to damage the targeted
        player.
      </p>

      <p>
        In maximum policing, AI will also refuse any support to the targeted
        player. Vagabond will not give cards, no services will be purchased from
        the otter player, etc.
      </p>

      <h3>Opportunistic aggression</h3>

      <p>
        Based on level of focus, the AI will attack even guarded cardboard. For
        example, with focus 3 it may go even after a piece guarded by 4
        warriors, with focus 1 it will only target 2 guards or below. If any
        valid targets are present, it may expend a number of actions or warriors
        based on focus to destroy them. After the threshold of losses is
        reached, it will stop fighting and continue as if in a neutral state.
        These numbers may be modified for some factions, for example AI may try
        to avoid killing too many lizard warriors unless it can destroy multiple
        gardens in the same turn. So if one combat action is available, it will
        not attack a garden guarded by three warriors, regardless of focus.
      </p>

      <h3>Neutral</h3>

      <p>
        Default state. AI will not prioritise any specific action. It will
        probably first kill any unguarded cardboard, then evaluate immediate
        scoring potential, then future scoring potential. If no scoring can be
        safely achieved next turn, it will focus on economy. Guarded pieces will
        not be attacked unless necessary for future scoring or unless combat is
        mandatory. Default safe guards are set to 3, but can be modified in the
        AI profile. Thus neutral AI may not move to score unless it has enough
        warriors to protect potential new assets.
      </p>

      <h3>Max Scoring</h3>

      <p>
        AI will find the highest possible score achievable immediately in the
        current turn and try to get it, even if it exposes its assets to future
        attacks. This will be triggered automatically with focus 3 when doing so
        would end the game. With lower focus, it will use any leftover actions
        to set up scoring for the next turn or protect assets, it will not fight
        unless necessary for scoring.
      </p>

      <h2>Max Economy</h2>

      <p>
        AI will try to increase its economy for next turn based on faction
        specifics. If a choice between military and scoring potential needs to
        be made, this will need to be decided in faction presets. For example,
        rats may have to choose to focus between building fortresses, or raiding
        players and destroying ruins with mob tokens to get items. A % chance
        can be defined in presets that one of the approaches will be selected.{' '}
      </p>

      <p>
        In a neutral state, these assets would be guarded with a max of 3
        warriors by default, but in the case of max economy state, chosen assets
        will be protected with all disposable warriors instead, unless specified
        otherwise in presets.
      </p>

      <br />
    </div>
  );
};

export default Home;
