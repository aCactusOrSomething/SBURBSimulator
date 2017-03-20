//if leader dies before last player is in OR before performing ectobiology, it's a doomed timeline.
function SaveDoomedTimeLine(){
	this.playerList = [];  //what players are already in the medium when i trigger?
	this.timePlayer = null;
	this.leaderPlayer = null;
	this.reason = "";
	this.trigger = function(playerList){
		this.timePlayer = findAspectPlayer(players, "Time"); //they don't have to be in the medium, though
		this.leaderPlayer = getLeader(players);
		this.playerList = playerList;
		/*
		if(this.timePlayer.dead){  //a dead time player can't prevent shit.
			//console.log("time player is dead, not triggering")
			//console.log(this.timePlayer);
			return false;
		}*/
		//console.log("time player is not dead,  triggering")
		return (this.ectoDoom() || this.playerDoom() || this.randomDoom());
	}

	this.renderContent = function(div){
		div.append("<br>"+this.content());
	}

	this.leaderIsFucked = function(){
		if(this.leaderPlayer.dead && !this.leaderPlayer.dreamSelf && !this.leaderPlayer.godTier && !this.leaderPlayer.godDestiny){
			return true;
		}
		return false;
	}

	this.ectoDoom = function(){
		if(this.leaderIsFucked() && !ectoBiologyStarted){
			this.reason = "Leader killed before ectobiology."
			return true; //paradox, the babies never get made.
		}
		return false;
	}

	this.playerDoom = function(){
		if(this.leaderIsFucked() && this.playerList.length < players.length){
			this.reason = "Leader killed before all players in medium.";
			return true; //not everybody is in, leader can't be server for final player
		}
		return false;
	}

	this.randomDoom = function(){
		this.reason = "Shenanigans"
		return Math.seededRandom() > .99
	}

	this.content = function(){
		var ret = "A " + this.timePlayer.htmlTitleBasic() + " suddenly warps in from the future. ";
		ret += " They come with a dire warning of a doomed timeline. ";

		if(this.reason == "Leader killed before ectobiology."){
			//alert("ecto doom")
			ret += " If the " + this.leaderPlayer.htmlTitleBasic() + " dies right now, ";
			ret += " none of the Players will even be born in the first place (Long story, just trust them). ";
			ret += " They make it so that never happened. Forget about it. ";
			doomedTimelineReasons.push(this.reason)
			this.leaderPlayer.dead = false;
		}else if(this.reason == "Leader killed before all players in medium."){
			ret += " If the " + this.leaderPlayer.htmlTitleBasic() + " dies right now, ";
			ret += " the " +this.playerList[this.playerList.length-1].htmlTitleBasic() + " will never even make it into the medium. ";
			ret += " after all, the " + this.leaderPlayer.htmlTitleBasic() + " is their server player. ";
			ret += " They make it so that never happened. Forget about it. ";
			this.leaderPlayer.dead = false;
			doomedTimelineReasons.push(this.reason)
		}else{
			if(this.timePlayer.leader && !ectoBiologyStarted ){
					ectoBiologyStarted = true;
					this.reason = "Time player didn't do ectobiology."
					doomedTimelineReasons.push(this.reason)
					ret += " They need to do the ectobiology right freaking now, or none of the players will ever even be born.";
			}else{
				this.reason = "Shenanigans"
				doomedTimelineReasons.push(this.reason)
				ret += " It's too complicated to explain, but everyone has already screwed up beyond repair. Just trust them. ";
			}
		}

		ret += " The " + this.timePlayer.htmlTitleBasic() + " has sacrificed themselves to prevent this from happening. ";
		ret += " YOUR session's " + this.timePlayer.htmlTitle() + " is fine, don't worry about it...but THIS one is now doomed. ";
		ret += " Least they can do after saving everyone is to time travel to where they can do the most good. ";
		ret += " After doing something inscrutable, they vanish in a cloud of clocks and gears. ";
		this.timePlayer.doomedTimeClones ++;
		return ret;
	}
}
