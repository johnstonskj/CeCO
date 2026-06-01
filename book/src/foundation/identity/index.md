# Identity Aspects

![Identity Aspect Classes](./identify-aspects.svg)

<span class="figure caption">Identity Aspects</span>

## Classes

### Classification Scheme

```turtle
fnd:ClassificationScheme a rdfs:Class ;
  rdfs:subClassOf fnd:Scheme ;
  skos:prefLabel "ClassificationScheme"@en ;
  skos:definition ""@en .
```

### Classifier

```turtle
fnd:Classifier a rdfs:Class ;
  rdfs:subClassOf fnd:Reference ;
  skos:prefLabel "Classifier"@en ;
  skos:definition ""@en .
```

### Identification Scheme

```turtle
fnd:IdentificationScheme a rdfs:Class ;
  rdfs:subClassOf fnd:Scheme ;
  skos:prefLabel "IdentificationScheme"@en ;
  skos:definition ""@en .
```

### Identifier

```turtle
fnd:Identifier a rdfs:Class ;
  rdfs:subClassOf fnd:Reference ;
  skos:prefLabel "Identifier"@en ;
  skos:definition ""@en .
```

### Scheme

```turtle
fnd:Scheme a rdfs:Class ;
  rdfs:subClassOf fnd:Agreement ;
  skos:prefLabel "Scheme"@en ;
  skos:definition ""@en .
```

## Properties

### broader Classifier

```turtle
fnd:broaderClassifier a rdfs:Property ;
  owl:inverseOf fnd:narrowerClassifier ;
  rdfs:domain fnd:Classifier ;
  rdfs:range fnd:Classifier ;
  skos:prefLabel "broaderClassifier"@en ;
  skos:definition ""@en .
```

### in Classification Scheme

```turtle
fnd:inClassificationScheme a rdfs:Property ;
  rdfs:domain fnd:Classifier ;
  rdfs:range fnd:ClassificationScheme ;
  skos:prefLabel "inClassificationScheme"@en ;
  skos:definition ""@en .
```

### in Identification Scheme

```turtle
fnd:inIdentificationScheme a rdfs:Property ;
  rdfs:domain fnd:Identifier ;
  rdfs:range fnd:IdentificationScheme ;
  skos:prefLabel "inIdentificationScheme"@en ;
  skos:definition ""@en .
```

### narrower Classifier

```turtle
fnd:narrowerClassifier a rdfs:Property ;
  owl:inverseOf fnd:broaderClassifier ;
  rdfs:domain fnd:Classifier ;
  rdfs:range fnd:Classifier ;
  skos:prefLabel "narrowerClassifier"@en ;
  skos:definition ""@en .
```

### scheme Authority

```turtle
fnd:schemeAuthority a rdfs:Property ;
  rdfs:domain fnd:Scheme ;
  rdfs:range fnd:Referent ;
  skos:prefLabel "schemeAuthority"@en ;
  skos:definition ""@en .
```
