let enemy; // declared in the global scope so it is available everywhere

// also should have used inheritance here as Enemy and Player have the same properties
function Enemy(enemyType, health, mana, strength, agility, speed) {
    // really a base class should be created and inherited from for the different player types instead of using this classType attribute
    this.enemyType = enemyType; 
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}