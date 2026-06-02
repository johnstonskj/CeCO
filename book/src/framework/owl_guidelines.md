# OWL Guidelines

TBD

## Ontologies

TBD

### Namespaces

The following are the *minimum* set of namespaces required in the ontologies
defined in this book.

| Name        | prefix | URL                                             |
| ----------- | ------ | ----------------------------------------------- |
| RDF         | `rdf`  | `<http://www.w3.org/1999/02/22-rdf-syntax-ns#>` |
| RDF Schema  | `rdfs` | `<http://www.w3.org/2000/01/rdf-schema#>`       |
| XML Schema. | `xsd`  | `<http://www.w3.org/2000/01/rdf-schema#>`       |
| OWL         | `owl`  | `<http://www.w3.org/2002/07/owl#>`              |
| SKOS        | `skos` | `<http://www.w3.org/2004/02/skos/core#>`        |
| Dublin Core | `dc`   | `<http://purl.org/dc/elements/1.1/>`            |

<span class="table caption">Minimum Required Namespaces</span>

### Ontology Predicates

The following are the expected predicates expected on all `owl:Ontology`
resources.

| Name                         | Required | Value / Purpose                                                                 |
| ---------------------------- | -------- | ------------------------------------------------------------------------------- |
| `rdf:type` / `a`             | **yes**  | At least `owl:Ontology` , maybe `skos:ConceptScheme`                            |
| `owl:versionIRI`             | **yes**  | A version-specific IRI representing the version-distinct resource.              |
| `owl:versionInfo`            | **yes**  | Used to attach the version identifier to this version-distinct resource.        |
| `owl:backwardCompatibleWith` | no       | TBD                                                                             |
| `owl:imports`                | no       | *Should* import SKOS.                                                           |
| `skos:prefLabel`             | **yes**  | Primary label/name for this class.                                              |
| `skos:altLabel`              | no       | Alternate label/names for this class.                                           |
| `dc:description`             | no       | Informal description of this class.                                             |
| `skos:ConceptScheme`         | no       | Denotes this ontology is also a SKOS concept scheme.                            |
| `skos:hasTopConcept`         | no       | Denotes one or more *top-level* concepts; iff this is a `skos:ConceptScheme`.   |

<span class="table caption">Expected Ontology Predicates</span>

Notes:

1. The version IRI path is constructed with the template
   `v/{year}/{month}/{day}/{domain}/`, where the date is the release date for
   the ontology.
2. The version info string is constructed with the template
   `v{year}-{month}-{day}`, which matches the date in the version IRI.
3. Validation **must** ensure that any concept referenced by `skos:hasTopConcept`
   is a member of this ontology (our own constraint) and has the predicate
   `skos:inScheme` referencing this ontology.

### Example Ontology

```turtle
@prefix rdf:  <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xsd:  <http://www.w3.org/2000/01/rdf-schema#> .
@prefix owl:  <http://www.w3.org/2002/07/owl#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix dc:   <http://purl.org/dc/elements/1.1/> .
@prefix fnd:  <https://ceco.one/v/2026/06/01/foundation/> .
@base         <https://ceco.one/v/2026/06/01/foundation/> .

fnd:
  ##### OWL Ontology Type and Version ....................................##### 
  a owl:Ontology ;
  owl:versionIRI <https://ceco.one/v/2026/06/01/foundation/> ;
  owl:versionInfo "v2026-06-01" ;
  
  ##### Labels ...........................................................#####
  skos:prefLabel "Foundation" ;
  skos:altLabel "CeCO Foundation" ;
  
  ##### SKOS Thesaurus ...................................................#####
  a skos:ConceptScheme ;
  skos:hasTopConcept fns:Thing ;
  
  ##### Import any necessary Ontologies here .............................#####
  owl:imports <http://www.w3.org/2004/02/skos/core> ;
  owl:imports <http://purl.org/dc/elements/1.1/> .

##### Ensure these are annotation properties .............................#####
skos:prefLabel a owl:AnnotationProperty .
skos:altLabel a owl:AnnotationProperty .
skos:definition a owl:AnnotationProperty .
skos:example a owl:AnnotationProperty . # etc.

dc:description a owl:AnnotationProperty . # etc.
```

## Classes

The following are the expected predicates expected on all `rdfs:Class`
resources.

### Class Predicates

| Name               | Required    | Value / Purpose                                                       |
| ------------------ | ----------- | --------------------------------------------------------------------- |
| `rdf:type` / `a`   | **yes**     | At least `rdfs:Class`, maybe `skos:Concept`                           |
| `rdfs:subClassOf`  | no          | Required if this has one or more parent classes.                      |
| `owl:disjointWith` | no          | Denotes one or more classes this class is disjoint with.              |
| `skos:prefLabel`   | **yes**     | Primary label/name for this class.                                    |
| `skos:altLabel`    | no          | Alternate label/names for this class.                                 |
| `skos:definition`  | **yes**     | Definition of this class (precise/concise as possible).               |
| `dc:description`   | no          | Informal description of this class.                                   |
| `skos:example`     | no          | One or more illustrative examples.                                    |
| `skos:broader`     | no          | Denotes a broader concept; iff this is a `skos:Concept`.              |
| `skos:narrower`    | no          | Denotes a narrower concept; iff this is a `skos:Concept`.             |
| `skos:inScheme`    | **yes iff** | Denotes one or more containing schemes; iff this is a `skos:Concept`. |

<span class="table caption">Expected Class Predicates</span>

### Example Class

```turtle
fnd:Reference
  ##### Class Definition .................................................#####
  a rdfs:Class, skos:Concept ;
  rdfs:subClassOf fnd:Thing ;
  owl:disjointWith fnd:Referent ;
  
  ##### Labels and Definition ............................................#####
  skos:prefLabel "Reference"@en ;
  skos:definition 
    "A label used to *refer to a thing*, distinct from a *thing* itself."@en ;
  
  ##### SKOS Thesaurus ...................................................#####
  skos:inScheme fnd: .
```

## Properties

The following are the expected predicates expected on all `rdfs:Property`
resources.

### Property Predicates

| Name                 | Required    | Value / Purpose                                                       |
| ------------------   | ----------- | --------------------------------------------------------------------- |
| `rdf:type` / `a`     | **yes**     | At least `rdfs:Property`, maybe `skos:Concept`                        |
| `rdfs:subPropertyOf` | no          | Required if this has one or more parent properties.                   |
| `owl:inverseOf`      | no          | Denotes another property this property is the inverse of.             |
| `skos:prefLabel`     | **yes**     | Primary label/name for this property.                                 |
| `skos:altLabel`      | no          | Alternate label/names for this property.                              |
| `skos:definition`    | **yes**     | Definition of this property (precise/concise as possible).            |
| `dc:description`     | no          | Informal description of this property.                                |
| `skos:example`       | no          | One or more illustrative examples.                                    |
| `skos:broader`       | no          | Denotes a broader concept; iff this is a `skos:Concept`.              |
| `skos:narrower`      | no          | Denotes a narrower concept; iff this is a `skos:Concept`.             |
| `skos:inScheme`      | **yes iff** | Denotes one or more containing schemes; iff this is a `skos:Concept`. |

<span class="table caption">Expected Property Predicates</span>

### Example Property

```turtle
fnd:aPartyTo 
  ##### Class Definition .................................................#####
  a rdfs:Property ;
  owl:inverseOf includesParty ;
  rdfs:domain fnd:Party ;
  rdfs:range fnd:Agreement ;
  
  ##### Labels and Definition ............................................#####
  skos:prefLabel "a party to"@en ;
  skos:definition 
    "Denotes that this party plays a *rôle* within the related agreement."@en .
```
