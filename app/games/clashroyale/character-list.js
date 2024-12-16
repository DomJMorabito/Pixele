const characters = [
    {
        name: 'Arrows',
        arena: 'Training Camp (0)',
        rarity: 'Common',
        type: 'Spell',
        evolution: 'N/A',
        elixir: 3
    },
    {
        name: 'Minions',
        arena: 'Training Camp (0)',
        rarity: 'Common',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 3
    },
    {
        name: 'Archers',
        arena: 'Training Camp (0)',
        rarity: 'Common',
        type: 'Troop',
        evolution: 'Yes',
        elixir: 3
    },
    {
        name: 'Knight',
        arena: 'Training Camp (0)',
        rarity: 'Common',
        type: 'Troop',
        evolution: 'Yes',
        elixir: 3
    },
    {
        name: 'Tower Princess',
        arena: 'Training Camp (0)',
        rarity: 'Common',
        type: 'Tower Troop',
        evolution: 'N/A'
    },
    {
        name: 'Fireball',
        arena: 'Training Camp (0)',
        rarity: 'Rare',
        type: 'Spell',
        evolution: 'N/A',
        elixir: 4
    },
    {
        name: 'Mini P.E.K.K.A.',
        arena: 'Training Camp (0)',
        rarity: 'Rare',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 4
    },
    {
        name: 'Musketeer',
        arena: 'Training Camp (0)',
        rarity: 'Rare',
        type: 'Troop',
        evolution: 'Yes',
        elixir: 4
    },
    {
        name: 'Giant',
        arena: 'Training Camp (0)',
        rarity: 'Rare',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 5
    },
    {
        name: 'Spear Goblins',
        arena: 'Goblin Stadium (1)',
        rarity: 'Common',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 2
    },
    {
        name: 'Goblins',
        arena: 'Goblin Stadium (1)',
        rarity: 'Common',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 2
    },
    {
        name: 'Goblin Cage',
        arena: 'Goblin Stadium (1)',
        rarity: 'Rare',
        type: 'Building',
        evolution: 'Yes',
        elixir: 4
    },
    {
        name: 'Goblin Hut',
        arena: 'Goblin Stadium (1)',
        rarity: 'Rare',
        type: 'Building',
        evolution: 'N/A',
        elixir: 5
    },
    {
        name: 'Bomber',
        arena: 'Bone Pit (2)',
        rarity: 'Common',
        type: 'Troop',
        evolution: 'Yes',
        elixir: 2
    },
    {
        name: 'Skeletons',
        arena: 'Bone Pit (2)',
        rarity: 'Common',
        type: 'Troop',
        evolution: 'Yes',
        elixir: 1
    },
    {
        name: 'Tombstone',
        arena: 'Bone Pit (2)',
        rarity: 'Rare',
        type: 'Building',
        evolution: 'N/A',
        elixir: 3
    },
    {
        name: 'Valkyrie',
        arena: 'Bone Pit (2)',
        rarity: 'Rare',
        type: 'Troop',
        evolution: 'Yes',
        elixir: 4
    },
    {
        name: 'Cannon',
        arena: 'Barbarian Bowl (3)',
        rarity: 'Common',
        type: 'Building',
        evolution: 'Yes',
        elixir: 3
    },
    {
        name: 'Barbarians',
        arena: 'Barbarian Bowl (3)',
        rarity: 'Common',
        type: 'Troop',
        evolution: 'Yes',
        elixir: 5
    },
    {
        name: 'Battle Ram',
        arena: 'Barbarian Bowl (3)',
        rarity: 'Rare',
        type: 'Troop',
        evolution: 'Yes',
        elixir: 4
    },
    {
        name: 'Mega Minion',
        arena: 'Barbarian Bowl (3)',
        rarity: 'Rare',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 3
    },
    {
        name: 'Electro Spirit',
        arena: 'Spell Valley (4)',
        rarity: 'Common',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 1
    },
    {
        name: 'Skeleton Dragons',
        arena: 'Spell Valley (4)',
        rarity: 'Common',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 4
    },
    {
        name: 'Fire Spirit',
        arena: 'Spell Valley (4)',
        rarity: 'Common',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 1
    },
    {
        name: 'Bomb Tower',
        arena: 'Spell Valley (4)',
        rarity: 'Rare',
        type: 'Building',
        evolution: 'N/A',
        elixir: 4
    },
    {
        name: 'Inferno Tower',
        arena: 'Spell Valley (4)',
        rarity: 'Rare',
        type: 'Building',
        evolution: 'N/A',
        elixir: 5
    },
    {
        name: 'Wizard',
        arena: 'Spell Valley (4)',
        rarity: 'Rare',
        type: 'Troop',
        evolution: 'Yes',
        elixir: 5
    },
    {
        name: 'Zap',
        arena: "Builder's Workshop (5)",
        rarity: 'Common',
        type: 'Spell',
        evolution: 'Yes',
        elixir: 2
    },
    {
        name: 'Mortar',
        arena: "Builder's Workshop (5)",
        rarity: 'Common',
        type: 'Building',
        evolution: 'Yes',
        elixir: 4
    },
    {
        name: 'Bats',
        arena: "Builder's Workshop (5)",
        rarity: 'Common',
        type: 'Troop',
        evolution: 'Yes',
        elixir: 2
    },
    {
        name: 'Rocket',
        arena: "Builder's Workshop (5)",
        rarity: 'Rare',
        type: 'Spell',
        evolution: 'N/A',
        elixir: 6
    },
    {
        name: 'Flying Machine',
        arena: "Builder's Workshop (5)",
        rarity: 'Rare',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 4
    },
    {
        name: 'Hog Rider',
        arena: "Builder's Workshop (5)",
        rarity: 'Rare',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 4
    },
    {
        name: 'Goblin Barrel',
        arena: "P.E.K.K.S's Playhouse (6)",
        rarity: 'Epic',
        type: 'Spell',
        evolution: 'Yes',
        elixir: 3
    },
    {
        name: 'Guards',
        arena: "P.E.K.K.S's Playhouse (6)",
        rarity: 'Epic',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 3
    },
    {
        name: 'Baby Dragon',
        arena: "P.E.K.K.S's Playhouse (6)",
        rarity: 'Epic',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 4
    },
    {
        name: 'Skeleton Army',
        arena: "P.E.K.K.S's Playhouse (6)",
        rarity: 'Epic',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 3
    },
    {
        name: 'Witch',
        arena: "P.E.K.K.S's Playhouse (6)",
        rarity: 'Epic',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 5
    },
    {
        name: 'P.E.K.K.A.',
        arena: "P.E.K.K.S's Playhouse (6)",
        rarity: 'Epic',
        type: 'Troop',
        evolution: 'Yes',
        elixir: 7
    },
    {
        name: 'Royal Recruits',
        arena: 'Royal Arena (7)',
        rarity: 'Common',
        type: 'Troop',
        evolution: 'Yes',
        elixir: 7
    },
    {
        name: 'Royal Giant',
        arena: 'Royal Arena (7)',
        rarity: 'Common',
        type: 'Troop',
        evolution: 'Yes',
        elixir: 6
    },
    {
        name: 'Royal Hogs',
        arena: 'Royal Arena (7)',
        rarity: 'Rare',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 5
    },
    {
        name: 'Three Musketeers',
        arena: 'Royal Arena (7)',
        rarity: 'Rare',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 9
    },
    {
        name: 'Dark Prince',
        arena: 'Royal Arena (7)',
        rarity: 'Epic',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 5
    },
    {
        name: 'Prince',
        arena: 'Royal Arena (7)',
        rarity: 'Epic',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 5
    },
    {
        name: 'Balloon',
        arena: 'Royal Arena (7)',
        rarity: 'Epic',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 5
    },
    {
        name: 'Giant Snowball',
        arena: 'Frozen Peak (8)',
        rarity: 'Common',
        type: 'Spell',
        evolution: 'Yes',
        elixir: 2
    },
    {
        name: 'Ice Spirit',
        arena: 'Frozen Peak (8)',
        rarity: 'Common',
        type: 'Troop',
        evolution: 'Yes',
        elixir: 1
    },
    {
        name: 'Battle Healer',
        arena: 'Frozen Peak (8)',
        rarity: 'Rare',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 4
    },
    {
        name: 'Ice Golem',
        arena: 'Frozen Peak (8)',
        rarity: 'Rare',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 2
    },
    {
        name: 'Lightning',
        arena: 'Frozen Peak (8)',
        rarity: 'Epic',
        type: 'Spell',
        evolution: 'N/A',
        elixir: 6
    },
    {
        name: 'Freeze',
        arena: 'Frozen Peak (8)',
        rarity: 'Epic',
        type: 'Spell',
        evolution: 'N/A',
        elixir: 4
    },
    {
        name: 'Giant Skeleton',
        arena: 'Frozen Peak (8)',
        rarity: 'Epic',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 6
    },
    {
        name: 'Cannoneer',
        arena: 'Frozen Peak (8)',
        rarity: 'Epic',
        type: 'Tower Troop',
        evolution: 'N/A',
        elixir: 0
    },
    {
        name: 'Skeleton Barrel',
        arena: 'Jungle Arena (9)',
        rarity: 'Common',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 3
    },
    {
        name: 'Goblin Gang',
        arena: 'Jungle Arena (9)',
        rarity: 'Common',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 3
    },
    {
        name: 'Barbarian Hut',
        arena: 'Jungle Arena (9)',
        rarity: 'Rare',
        type: 'Building',
        evolution: 'N/A',
        elixir: 6
    },
    {
        name: 'Dart Goblin',
        arena: 'Jungle Arena (9)',
        rarity: 'Rare',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 3
    },
    {
        name: 'Barbarian Barrel',
        arena: 'Jungle Arena (9)',
        rarity: 'Epic',
        type: 'Spell',
        evolution: 'N/A',
        elixir: 2
    },
    {
        name: 'Poison',
        arena: 'Jungle Arena (9)',
        rarity: 'Epic',
        type: 'Spell',
        evolution: 'N/A',
        elixir: 4
    },
    {
        name: 'Goblin Giant',
        arena: 'Jungle Arena (9)',
        rarity: 'Epic',
        type: 'Troop',
        evolution: 'Yes',
        elixir: 6
    },
    {
        name: 'Tesla',
        arena: 'Hog Mountain (10)',
        rarity: 'Common',
        type: 'Building',
        evolution: 'Yes',
        elixir: 4
    },
    {
        name: 'Elite Barbarians',
        arena: 'Hog Mountain (10)',
        rarity: 'Common',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 6
    },
    {
        name: 'Minion Horde',
        arena: 'Hog Mountain (10)',
        rarity: 'Common',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 5
    },
    {
        name: 'Furnace',
        arena: 'Hog Mountain (10)',
        rarity: 'Rare',
        type: 'Building',
        evolution: 'N/A',
        elixir: 4
    },
    {
        name: 'Zappies',
        arena: 'Hog Mountain (10)',
        rarity: 'Rare',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 4
    },
    {
        name: 'X-Bow',
        arena: 'Hog Mountain (10)',
        rarity: 'Epic',
        type: 'Building',
        evolution: 'N/A',
        elixir: 6
    },
    {
        name: 'Hunter',
        arena: 'Hog Mountain (10)',
        rarity: 'Epic',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 4
    },
    {
        name: 'Golem',
        arena: 'Hog Mountain (10)',
        rarity: 'Epic',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 8
    },
    {
        name: 'The Log',
        arena: 'Electro Valley (11)',
        rarity: 'Legendary',
        type: 'Spell',
        evolution: 'N/A',
        elixir: 2
    },
    {
        name: 'Mega Knight',
        arena: 'Electro Valley (11)',
        rarity: 'Legendary',
        type: 'Troop',
        evolution: 'Yes',
        elixir: 7
    },
    {
        name: 'Ram Rider',
        arena: 'Electro Valley (11)',
        rarity: 'Legendary',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 5
    },
    {
        name: 'Electro Wizard',
        arena: 'Electro Valley (11)',
        rarity: 'Legendary',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 4
    },
    {
        name: 'Inferno Dragon',
        arena: 'Electro Valley (11)',
        rarity: 'Legendary',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 4
    },
    {
        name: 'Sparky',
        arena: 'Electro Valley (11)',
        rarity: 'Legendary',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 6
    },
    {
        name: 'Miner',
        arena: 'Electro Valley (11)',
        rarity: 'Legendary',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 3
    },
    {
        name: 'Princess',
        arena: 'Electro Valley (11)',
        rarity: 'Legendary',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 3
    },
    {
        name: 'Dagger Duchess',
        arena: 'Electro Valley (11)',
        rarity: 'Legendary',
        type: 'Tower Troop',
        evolution: 'N/A',
        elixir: 0
    },
    {
        name: 'Firecracker',
        arena: 'Spooky Town (12)',
        rarity: 'Common',
        type: 'Troop',
        evolution: 'Yes',
        elixir: 3
    },
    {
        name: 'Earthquake',
        arena: 'Spooky Town (12)',
        rarity: 'Rare',
        type: 'Spell',
        evolution: 'N/A',
        elixir: 3
    },
    {
        name: 'Electro Dragon',
        arena: 'Spooky Town (12)',
        rarity: 'Epic',
        type: 'Troop',
        evolution: 'Yes',
        elixir: 5
    },
    {
        name: 'Wall Breakers',
        arena: 'Spooky Town (12)',
        rarity: 'Epic',
        type: 'Troop',
        evolution: 'Yes',
        elixir: 2
    },
    {
        name: 'Graveyard',
        arena: 'Spooky Town (12)',
        rarity: 'Legendary',
        type: 'Spell',
        evolution: 'N/A',
        elixir: 5
    },
    {
        name: 'Phoenix',
        arena: 'Spooky Town (12)',
        rarity: 'Legendary',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 4
    },
    {
        name: 'Royal Ghost',
        arena: 'Spooky Town (12)',
        rarity: 'Legendary',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 3
    },
    {
        name: 'Ice Wizard',
        arena: 'Spooky Town (12)',
        rarity: 'Legendary',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 3
    },
    {
        name: 'Goblin Demolisher',
        arena: 'Spooky Town (12)',
        rarity: 'Rare',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 4
    },
    {
        name: 'Rascals',
        arena: "Rascal's Hideout (13)",
        rarity: 'Common',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 5
    },
    {
        name: 'Heal Spirit',
        arena: "Rascal's Hideout (13)",
        rarity: 'Rare',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 1
    },
    {
        name: 'Electro Giant',
        arena: "Rascal's Hideout (13)",
        rarity: 'Epic',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 7
    },
    {
        name: 'Bowler',
        arena: "Rascal's Hideout (13)",
        rarity: 'Epic',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 5
    },
    {
        name: 'Magic Archer',
        arena: "Rascal's Hideout (13)",
        rarity: 'Legendary',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 4
    },
    {
        name: 'Bandit',
        arena: "Rascal's Hideout (13)",
        rarity: 'Legendary',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 3
    },
    {
        name: 'Lava Hound',
        arena: "Rascal's Hideout (13)",
        rarity: 'Legendary',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 7
    },
    {
        name: 'Suspicious Bush',
        arena: "Rascal's Hideout (13)",
        rarity: 'Rare',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 2
    },
    {
        name: 'Royal Chef',
        arena: "Rascal's Hideout (13)",
        rarity: 'Legendary',
        type: 'Tower Troop',
        evolution: 'N/A',
        elixir: 0
    },
    {
        name: 'Royal Delivery',
        arena: 'Serenity Peak (14)',
        rarity: 'Common',
        type: 'Spell',
        evolution: 'N/A',
        elixir: 3
    },
    {
        name: 'Elixir Golem',
        arena: 'Serenity Peak (14)',
        rarity: 'Rare',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 3
    },
    {
        name: 'Executioner',
        arena: 'Serenity Peak (14)',
        rarity: 'Epic',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 5
    },
    {
        name: 'Goblin Drill',
        arena: 'Serenity Peak (14)',
        rarity: 'Epic',
        type: 'Building',
        evolution: 'Yes',
        elixir: 4
    },
    {
        name: 'Rage',
        arena: 'Serenity Peak (14)',
        rarity: 'Epic',
        type: 'Spell',
        evolution: 'N/A',
        elixir: 2
    },
    {
        name: 'Lumberjack',
        arena: 'Serenity Peak (14)',
        rarity: 'Legendary',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 4
    },
    {
        name: 'Night Witch',
        arena: 'Serenity Peak (14)',
        rarity: 'Legendary',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 4
    },
    {
        name: 'Goblin Curse',
        arena: 'Serenity Peak (14)',
        rarity: 'Epic',
        type: 'Spell',
        evolution: 'N/A',
        elixir: 2
    },
    {
        name: 'Elixir Collector',
        arena: "Miner's Mine (15)",
        rarity: 'Rare',
        type: 'Building',
        evolution: 'N/A',
        elixir: 6
    },
    {
        name: 'Clone',
        arena: "Miner's Mine (15)",
        rarity: 'Epic',
        type: 'Spell',
        evolution: 'N/A',
        elixir: 3
    },
    {
        name: 'Tornado',
        arena: "Miner's Mine (15)",
        rarity: 'Epic',
        type: 'Spell',
        evolution: 'N/A',
        elixir: 3
    },
    {
        name: 'Mirror',
        arena: "Miner's Mine (15)",
        rarity: 'Epic',
        type: 'Spell',
        evolution: 'N/A',
        elixir: 0
    },
    {
        name: 'Cannon Cart',
        arena: "Miner's Mine (15)",
        rarity: 'Epic',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 5
    },
    {
        name: 'Mother Witch',
        arena: "Miner's Mine (15)",
        rarity: 'Legendary',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 4
    },
    {
        name: 'Fisherman',
        arena: "Miner's Mine (15)",
        rarity: 'Legendary',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 3
    },
    {
        name: 'Void',
        arena: "Miner's Mine (15)",
        rarity: 'Epic',
        type: 'Spell',
        evolution: 'N/A',
        elixir: 3
    },
    {
        name: 'Goblin Machine',
        arena: "Miner's Mine (15)",
        rarity: 'Legendary',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 5
    },
    {
        name: 'Skeleton King',
        arena: "Executioner's Kitchen (16)",
        rarity: 'Champion',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 4
    },
    {
        name: 'Golden Knight',
        arena: "Executioner's Kitchen (16)",
        rarity: 'Champion',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 4
    },
    {
        name: 'Mighty Miner',
        arena: 'Royal Crypt (17)',
        rarity: 'Champion',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 4
    },
    {
        name: 'Archer Queen',
        arena: 'Royal Crypt (17)',
        rarity: 'Champion',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 5
    },
    {
        name: 'Monk',
        arena: 'Silent Sanctuary (18)',
        rarity: 'Champion',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 5
    },
    {
        name: 'Little Prince',
        arena: 'Silent Sanctuary (18)',
        rarity: 'Champion',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 3
    },
    {
        name: 'Goblinstein',
        arena: 'Silent Sanctuary (18)',
        rarity: 'Champion',
        type: 'Troop',
        evolution: 'N/A',
        elixir: 5
    }
];