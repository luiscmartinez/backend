exports.seed = function(knex) {
  // Deletes ALL existing entries

  // Inserts seed entries
  return knex('groups').insert([
    {
      name: 'Las Vegas Raiders Fans',
      privacy_setting: 'public',
      location: '89103',
      creator_id: 1,
      image:
        'https://cdn.bleacherreport.net/images/team_logos/328x328/oakland_raiders.png',
      description: 'Raiders Baby',
    },
    {
      name: 'Miami Dolphins Fans',
      privacy_setting: 'public',
      location: '33056',
      creator_id: 1,
      image:
        'https://cdn.bleacherreport.net/images/team_logos/328x328/miami_dolphins.png',
      description: 'Tank for Tua',
    },
    {
      name: 'Tennessee Titans Fans',
      privacy_setting: 'public',
      location: '37213',
      creator_id: 2,
      image:
        'https://cdn.bleacherreport.net/images/team_logos/328x328/tennessee_titans.png',
      description: 'Titans Fans',
    },
    {
      name: 'Buffalo Bills',
      privacy_setting: 'public',
      location: '14127',
      creator_id: 3,
      image:
        'https://cdn.bleacherreport.net/images/team_logos/328x328/buffalo_bills.png',
      description: 'Bills Fans',
    },
    {
      name: 'New England Patriots Fans',
      privacy_setting: 'public',
      location: '02035',
      creator_id: 3,
      image:
        'https://cdn.bleacherreport.net/images/team_logos/328x328/new_england_patriots.png',
      description: 'Patriots Fans',
    },
    {
      name: 'New York Jets Fans',
      privacy_setting: 'public',
      location: '07073',
      creator_id: 4,
      image:
        'https://cdn.bleacherreport.net/images/team_logos/328x328/new_york_jets.png',
      description: 'Jets Fans',
    },
    {
      name: 'Denver Broncos Fans',
      privacy_setting: 'public',
      location: '80204',
      creator_id: 4,
      image:
        'https://cdn.bleacherreport.net/images/team_logos/328x328/denver_broncos.png',
      description: 'Broncos Fans',
    },
    {
      name: 'Kansas City Chiefs Fans',
      privacy_setting: 'public',
      location: '64129',
      creator_id: 4,
      image:
        'https://cdn.bleacherreport.net/images/team_logos/328x328/kansas_city_chiefs.png',
      description: 'Chiefs Fans',
    },
    {
      name: 'LA Chargers Fans',
      privacy_setting: 'public',
      location: '90746',
      creator_id: 5,
      image:
        'https://cdn.bleacherreport.net/images/team_logos/328x328/los_angeles_chargers.png',
      description: 'Chargers Fans',
    },
    {
      name: 'Baltimore Ravens Fans',
      privacy_setting: 'public',
      location: '21230',
      creator_id: 5,
      image:
        'https://cdn.bleacherreport.net/images/team_logos/328x328/baltimore_ravens.png',
      description: 'Ravens Fans',
    },
    {
      name: 'Cincinatti Bengals Fans',
      privacy_setting: 'public',
      location: '45202',
      creator_id: 5,
      image:
        'https://cdn.bleacherreport.net/images/team_logos/328x328/cincinnati_bengals.png',
      description: 'Bengals Fans',
    },
    {
      name: 'Cleveland Browns Fans',
      privacy_setting: 'public',
      location: '44114',
      creator_id: 6,
      image:
        'https://cdn.bleacherreport.net/images/team_logos/328x328/cleveland_browns.png',
      description: 'Browns Fans',
    },
    {
      name: 'Pittsburgh Steelers Fans',
      privacy_setting: 'public',
      location: '15212',
      creator_id: 6,
      image:
        'https://cdn.bleacherreport.net/images/team_logos/328x328/pittsburgh_steelers.png',
      description: 'Steelers Fans',
    },
    {
      name: 'Houston Texans Fans',
      privacy_setting: 'public',
      location: '77054',
      creator_id: 6,
      image:
        'https://cdn.bleacherreport.net/images/team_logos/328x328/houston_texans.png',
      description: 'Texans Fans',
    },
    {
      name: 'Indianapolis Colts Fans',
      privacy_setting: 'public',
      location: '46225',
      creator_id: 6,
      image:
        'https://cdn.bleacherreport.net/images/team_logos/328x328/indianapolis_colts.png',
      description: 'Colts Fans',
    },
    {
      name: 'Jacksonville Jaguars Fans',
      privacy_setting: 'public',
      location: '32202',
      creator_id: 7,
      image:
        'https://cdn.bleacherreport.net/images/team_logos/328x328/jacksonville_jaguars.png',
      description: 'Jaguars Fans',
    },
    {
      name: 'Dallas Cowboys Fans',
      privacy_setting: 'public',
      location: '76011',
      creator_id: 7,
      image:
        'https://cdn.bleacherreport.net/images/team_logos/328x328/dallas_cowboys.png',
      description: 'Cowboys Fans',
    },
    {
      name: 'Washington Redskins Fans',
      privacy_setting: 'public',
      location: '20785',
      creator_id: 7,
      image:
        'https://cdn.bleacherreport.net/images/team_logos/328x328/washington_redskins.png',
      description: 'Redskins Fans',
    },
    {
      name: 'New York Giants Fans',
      privacy_setting: 'public',
      location: '07073',
      creator_id: 1,
      image:
        'https://cdn.bleacherreport.net/images/team_logos/328x328/new_york_giants.png',
      description: 'Giants Fans',
    },
    {
      name: 'Arizona Cardinals Fans',
      privacy_setting: 'public',
      location: '85305',
      creator_id: 1,
      image:
        'https://cdn.bleacherreport.net/images/team_logos/328x328/arizona_cardinals.png',
      description: 'Cardinals Fans',
    },
    {
      name: 'LA Rams Fans',
      privacy_setting: 'public',
      location: '90037',
      creator_id: 1,
      image:
        'https://cdn.bleacherreport.net/images/team_logos/328x328/los_angeles_rams.png',
      description: 'Rams Fans',
    },
    {
      name: 'San Francisco 49ers Fans',
      privacy_setting: 'public',
      location: '95054',
      creator_id: 2,
      image:
        'https://cdn.bleacherreport.net/images/team_logos/328x328/san_francisco_49ers.png',
      description: '49ers Fans',
    },
    {
      name: 'Seattle Seahawks Fans',
      privacy_setting: 'public',
      location: '98134',
      creator_id: 2,
      image:
        'https://cdn.bleacherreport.net/images/team_logos/328x328/seattle_seahawks.png',
      description: 'Seahawks Fans',
    },
    {
      name: 'Chicago Bears Fans',
      privacy_setting: 'public',
      location: '60605',
      creator_id: 3,
      image:
        'https://cdn.bleacherreport.net/images/team_logos/328x328/chicago_bears.png',
      description: 'Bears Fans',
    },
    {
      name: 'Detroit Lions Fans',
      privacy_setting: 'public',
      location: '48226',
      creator_id: 3,
      image:
        'https://cdn.bleacherreport.net/images/team_logos/328x328/detroit_lions.png',
      description: 'Lions Fans',
    },
    {
      name: 'Green Bay Packers Fans',
      privacy_setting: 'public',
      location: '54307',
      creator_id: 4,
      image:
        'https://cdn.bleacherreport.net/images/team_logos/328x328/green_bay_packers.png',
      description: 'Packers Fans',
    },
    {
      name: 'Minnesota Vikings Fans',
      privacy_setting: 'public',
      location: '55415',
      creator_id: 4,
      image:
        'https://cdn.bleacherreport.net/images/team_logos/328x328/minnesota_vikings.png',
      description: 'Vikings Fans',
    },
    {
      name: 'Atlanta Falcons Fans',
      privacy_setting: 'public',
      location: '30313',
      creator_id: 4,
      image:
        'https://cdn.bleacherreport.net/images/team_logos/328x328/atlanta_falcons.png',
      description: 'Falcons Fans',
    },
    {
      name: 'Carolina Panthers Fans',
      privacy_setting: 'public',
      location: '28202',
      creator_id: 4,
      image:
        'https://cdn.bleacherreport.net/images/team_logos/328x328/carolina_panthers.png',
      description: 'Panthers Fans',
    },
    {
      name: 'New Orleans Saints Fans',
      privacy_setting: 'public',
      location: '70112',
      creator_id: 4,
      image:
        'https://cdn.bleacherreport.net/images/team_logos/328x328/new_orleans_saints.png',
      description: 'Saints Fans',
    },
    {
      name: 'Tampa Bay Buccaneers Fans',
      privacy_setting: 'public',
      location: '33607',
      creator_id: 4,
      image:
        'https://cdn.bleacherreport.net/images/team_logos/328x328/tampa_bay_buccaneers.png',
      description: 'Buccaneers Fans',
    },
  ])
}
