# Agreements

![Agreement Classes](./agreements.svg)

<span class="figure caption">Agreements</span>

## Classes

### Agreement

```turtle
fnd:Agreement a rdfs:Class ;
  rdfs:subClassOf fnd:Thing ;
  skos:prefLabel "Agreement"@en ;
  skos:definition ""@en .
```

### Condition

```turtle
fnd:Condition a rdfs:Class ;
  dfs:subClassOf fnd:DependentThing ;
  skos:prefLabel "Condition"@en ;
  skos:definition ""@en .
```

### Party

```turtle
fnd:Party a rdfs:Class ;
  dfs:subClassOf fnd:Reference ;
  skos:prefLabel "Party"@en ;
  skos:definition ""@en .
```

## Properties

### includes Party

```turtle
fnd:includesParty a rdfs:Property ;
  rdfs:domain fnd:Agreement ;
  rdfs:range fnd:Party ;
  skos:prefLabel "includesParty"@en ;
  skos:definition ""@en .
```

### has Condition

```turtle
fnd:hasCondition a rdfs:Property ;
  rdfs:domain fnd:Agreement ;
  rdfs:range fnd:Condition ;
  skos:prefLabel "hasCondition"@en ;
  skos:definition ""@en .
```

### effective Timespan

```turtle
fnd:effectiveTimespan a rdfs:Property ;
  rdfs:domain fnd:Agreement ;
  rdfs:range fnd:TemporalSpanReference ;
  skos:prefLabel "effectiveTimespan"@en ;
  skos:definition ""@en .
```
