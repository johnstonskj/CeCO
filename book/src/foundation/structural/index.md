# Structural Aspects

![Structural Aspect Classes](./structural-aspects.svg)

<span class="figure caption">Structural Aspects</span>

## Classes

### Aggregate

```turtle
fnd:Aggregate a rdfs:Class ;
  rdfs:subClassOf fnd:PhysicalThing ;
  owl:disjointWith fnd:Composite;
  skos:prefLabel "Aggregate"@en ;
  skos:definition ""@en .
```

### Atomic

```turtle
fnd:Atomic a rdfs:Class ;
  rdfs:subClassOf fnd:StructuredThing ;
  owl:disjointWith Composite ;
  skos:prefLabel "Atomic"@en ;
  skos:definition ""@en .
```

### Composite

```turtle
fnd:Composite a rdfs:Class ;
  rdfs:subClassOf fnd:StructuredThing ;
  owl:disjointWith fnd:Aggregate ;
  skos:prefLabel "Composite"@en ;
  skos:definition ""@en .
```

### Dependent Thing

```turtle
fnd:DependentThing a rdfs:Class ;
  rdfs:subClassOf fnd:Thing ;
  owl:disjointWith fnd:IndependentThing ;
  skos:prefLabel "DependentThing"@en ;
  skos:definition ""@en .
```

### Independent Thing

```turtle
fnd:IndependentThing a rdfs:Class ;
  rdfs:subClassOf fnd:Thing ;
  owl:disjointWith fnd:DependentThing ;
  skos:prefLabel "IndependentThing"@en ;
  skos:definition ""@en .
```

### Physical Thing

```turtle
fnd:PhysicalThing a rdfs:Class ;
  rdfs:subClassOf fnd:Thing ;
  skos:prefLabel "PhysicalThing"@en ;
  skos:definition ""@en .
```

### Structured Thing

```turtle
fnd:StructuredThing a rdfs:Class ;
  rdfs:subClassOf fnd:PhysicalThing ;
  owl:disjointWith fnd:Atomic ;
  skos:prefLabel "StructuredThing"@en ;
  skos:definition ""@en .
```

### Thing

```turtle
fnd:Scheme a rdfs:Class ;
  skos:prefLabel "Thing"@en ;
  skos:definition ""@en .
```

## Properties

![Structural Aspect Properties](./structural-aspect-properties.svg)

### codependent With

```turtle
fnd:codependentWith a rdfs:Property, owl:ReflexiveProperty ;
  rdfs:domain fnd:StructuredThing ;
  rdfs:range fnd:StructuredThing ;
  skos:prefLabel "codependentWith"@en ;
  skos:definition ""@en .
```

### dependent Part Of

```turtle
fnd:dependentPartOf a rdfs:Property ;
  owl:inverseOf fnd:hasDependentPart ;
  rdfs:domain fnd:Dependent ;
  rdfs:range fnd:StructuredThing ;
  skos:prefLabel "dependentPartOf"@en ;
  skos:definition ""@en .
```

### dependent Upon

```turtle
fnd:dependentUpon a rdfs:Property ;
  rdfs:domain fnd:StructuredThing ;
  rdfs:range fnd:StructuredThing ;
  skos:prefLabel "dependentUpon"@en ;
  skos:definition ""@en .
```

### has Dependent

```turtle
fnd:hasDependent a rdfs:Property ;
  rdfs:domain fnd:StructuredThing ;
  rdfs:range fnd:StructuredThing ;
  skos:prefLabel "hasDependent"@en ;
  skos:definition ""@en .
```

### has Dependent Part

```turtle
fnd:hasDependentPart a rdfs:Property ;
  owl:inverseOf fnd:dependentPartOf ;
  rdfs:domain fnd:StructuredThing ;
  rdfs:range fnd:Dependent ;
  skos:prefLabel "hasDependentPart"@en ;
  skos:definition ""@en .
```

### has Independent Part

```turtle
fnd:hasIndependentPart a rdfs:Property ;
  owl:inverseOf fnd:narrowerClassifier ;
  rdfs:domain fnd:StructuredThing ;
  rdfs:range fnd:Independent ;
  skos:prefLabel "hasIndependentPart"@en ;
  skos:definition ""@en .
```

### independent Part Of

```turtle
fnd:independentPartOf a rdfs:Property ;
  owl:inverseOf fnd:hasIndependentPart ;
  rdfs:domain fnd:Independent ;
  rdfs:range fnd:StructuredThing ;
  skos:prefLabel "independentPartOf"@en ;
  skos:definition ""@en .
```
