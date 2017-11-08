const express = require("express");
const vocabularyRoutes = express.Router();

const bodyParser = require("body-parser");

const Vocabulary = require("../models/vocabulary");

// Vocabulary.remove({});

vocabularyRoutes.get("/", (req, res) => {
  Vocabulary.find({}, (err, vocabularies) => {
    if (err) return res.status(500).send(err);
    return res.send(vocabularies);
  });
});

vocabularyRoutes.get("/:id", (req, res) => {
  Vocabulary.findById({_id: req.params.id}, (err, vocabulary) => {
    if (err) return res.status(500).send(err);
    return res.send(vocabulary);
  })
})

vocabularyRoutes.post("/", (req, res) => {
  const brandNewvocabulary = new Vocabulary(req.body);
  brandNewvocabulary.save((err, newVocabularyThatWasJustSaved) => {
    if (err) return res.status(500).send(err);
    return res.status(201).send(newVocabularyThatWasJustSaved);
  });
});

vocabularyRoutes.put("/:id", (req, res) => {
  Vocabulary.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, vocabulary) => {
    if (err) return res.status(500).send(err);
    return res.send(vocabulary);
  });
});

vocabularyRoutes.delete("/:id", (req, res) => {
  Vocabulary.findByIdAndRemove(req.params.id, (err, vocabulary) => {
    if (err) return res.status(500).send(err);
    return res.send(vocabulary);
  });
});

module.exports = vocabularyRoutes;












//
