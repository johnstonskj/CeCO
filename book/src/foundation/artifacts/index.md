# Artifacts

![Artifact Classes](./artifacts.svg)

<span class="figure caption">Artifacts</span>

## Classes

TBD

### Artifact

```turtle
fnd:Artifact a rdfs:Class ;
  dfs:subClassOf fnd:Referent ;
  skos:prefLabel "Artifact"@en ;
  skos:definition ""@en .
```

### Dependent Artifact

```turtle
fnd:DependentArtifact a rdfs:Class ;
  dfs:subClassOf fnd:DependentThing, fnd:Artifact ;
  skos:prefLabel "DependentArtifact"@en ;
  skos:definition ""@en .
```

### Document

```turtle
fnd:Document a rdfs:Class ;
  dfs:subClassOf fnd:Artifact ;
  skos:prefLabel "Document"@en ;
  skos:definition ""@en .
```

### Independent Artifact

```turtle
fnd:IndependentArtifact a rdfs:Class ;
  dfs:subClassOf fnd:IndependentThing, fnd:Artifact ;
  skos:prefLabel "IndependentArtifact"@en ;
  skos:definition ""@en .
```

## Properties

![Artifact Properties](./artifact-properties.svg)

### author

```turtle
fnd:author a rdfs:Property ;
  rdfs:domain fnd:Artifact ;
  rdfs:range fnd:Party ;
  skos:prefLabel "author"@en ;
  skos:definition ""@en .
```

### editor

```turtle
fnd:author a rdfs:Property ;
  rdfs:domain fnd:Artifact ;
  rdfs:range fnd:Party ;
  skos:prefLabel "author"@en ;
  skos:definition ""@en .
```

### issued

```turtle
fnd:issued a rdfs:Property ;
  rdfs:domain fnd:Artifact ;
  rdfs:range fnd:TemporalEvent ;
  skos:prefLabel "issued"@en ;
  skos:definition ""@en .
```

### owner

```turtle
fnd:owner a rdfs:Property ;
  rdfs:domain fnd:Artifact ;
  rdfs:range fnd:Party ;
  skos:prefLabel "owner"@en ;
  skos:definition ""@en .
```

### published

```turtle
fnd:published a rdfs:Property ;
  rdfs:domain fnd:Artifact ;
  rdfs:range fnd:TemporalEvent ;
  skos:prefLabel "published"@en ;
  skos:definition ""@en .
```

### publisher

```turtle
fnd:publisher a rdfs:Property ;
  rdfs:domain fnd:Artifact ;
  rdfs:range fnd:Party ;
  skos:prefLabel "publisher"@en ;
  skos:definition ""@en .
```

### reviewer

```turtle
fnd:reviewer a rdfs:Property ;
  rdfs:domain fnd:Artifact ;
  rdfs:range fnd:Party ;
  skos:prefLabel "reviewer"@en ;
  skos:definition ""@en .
```

### valid

```turtle
fnd:valid a rdfs:Property ;
  rdfs:domain fnd:Artifact ;
  rdfs:range fnd:TemporalSpan ;
  skos:prefLabel "valid"@en ;
  skos:definition ""@en .
```
