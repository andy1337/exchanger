function getPs(ps, map=false) {
    var found = null;
    var collection = null;

    if (currentWay[0] == ps) collection = api.fromUniquePaySystems;
    else collection = api.toDirections;

    var group_map = {currency: {}, networks: {}, cities: {}};

    var paySystems = api.paySystems;
    for (var i = 0; i < paySystems.length; i++) {
        if ($.inArray(paySystems[i].id, collection) !== -1){
            if (paySystems[i].id === ps) {
                if (paySystems[i].group === null) group_map.currency[paySystems[i].currency] = { id:paySystems[i].id };
                found = paySystems[i];
            }
        }
        if (paySystems[i].group !== null && found !== null){
            //group_map.currency[paySystems[i].currency] = { id:paySystems[i].id };
            for (var y = 0; y < paySystems.length; y++) {
                if ($.inArray(paySystems[y].id, collection) !== -1 && paySystems[y].group == paySystems[i].group){
                    // currencies
                    if (paySystems[y].currency in group_map.currency){}
                    else {
                        group_map.currency[paySystems[y].currency] = { id:paySystems[y].id };
                        group_map.networks[paySystems[y].currency] = {};
                        group_map.cities[paySystems[y].currency] = {};
                    }
                    // networks
                    if (paySystems[y].network !== null){
                        if (paySystems[y].network in group_map.networks[paySystems[y].currency]){}
                        else {
                            group_map.networks[paySystems[y].currency][paySystems[y].network] = { id:paySystems[y].id };
                        }
                    }
                    // cities
                    if (paySystems[y].city !== null){
                        if (paySystems[y].city in group_map.cities[paySystems[y].currency]){}
                        else {
                            group_map.cities[paySystems[y].currency][paySystems[y].city] = { id:paySystems[y].id };
                        }
                    }

                    if (paySystems[y].id === ps) {
                        group_map.currency[paySystems[y].currency].active = true;
                        if (paySystems[y].network !== null)
                        group_map.networks[paySystems[y].currency][paySystems[y].network].active = true;
                        if (paySystems[y].city !== null)
                        group_map.cities[paySystems[y].currency][paySystems[y].city].active = true;
                    }
                }
            }
        }
        if (found !== null){
            if (found.group !== null){
                found.name = api.groups[found.group]['name_'+lang];
                found.logoWithoutBackground = api.groups[found.group].logoWithoutBackground;
            }
            if (!map) return found;
            else return {paySystem:found, map:group_map};
        } else group_map.currency = {};

    }
}

function getFullPsName(bank){
    var psName = "";
    if (bank['name_'+lang].search(bank.currency.toUpperCase()) === -1) psName += " валюта:<b>" + bank.currency.toUpperCase() + "</b>";
    if (bank.network != undefined) psName += " сеть:<b>" + api.networks[bank.network].name + "</b>";
    if (bank.city != undefined) psName += " город:<b>" + api.cities[bank.city]['name_'+lang] + "</b>";
    return bank['name_'+lang] + "<span class='help_labels'>" + psName + "</span>";
}

function simpleGetPs(ps){
    var paySystems = api.paySystems;
    for (var i = 0; i < paySystems.length; i++) {
        if (paySystems[i].id === ps) {
            return paySystems[i];
        }
    }
}

function getPssByGroup(group){
    var paySystems = api.paySystems;
    var pss = [];
    for (var i = 0; i < paySystems.length; i++) {
        if (paySystems[i].group === group) {
            pss.push(paySystems[i]);
        }
    }
    return pss;
}

function getActivePaySystem(way, ps){
    if (way == 1){
        if (ps.group != null){
            return groups.from[ps.group];
        }
        else return ps.id;
    } else {
        if (ps.group != null){
            return groups.to[ps.group];
        }
        else return ps.id;
    }
}

function getPssByFilter(filter){
    var paySystems = api.paySystems;
    var pss = [];
    for (var i = 0; i < paySystems.length; i++) {
        if (paySystems[i].currencyFilter === filter) {
            pss.push(paySystems[i]);
        }
    }
    return pss;
}

function mayBeTheSamePs(ps, data){
    ps = simpleGetPs(ps);
    if (ps.group !== null){
        var pssByGroup = getPssByGroup(ps.group);
        for (var psByGroup in pssByGroup){
            if ($.inArray(pssByGroup[psByGroup].id, data) !== -1) {
                return pssByGroup[psByGroup].id;
            }
        }
    }
    return +data[0];
}